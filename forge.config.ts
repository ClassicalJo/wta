import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { VitePlugin } from '@electron-forge/plugin-vite';
import type { ForgeConfig } from '@electron-forge/shared-types';
import { FuseV1Options, FuseVersion } from '@electron/fuses';
import fs from 'fs';
import { spawn } from 'node:child_process';
import path from 'path';

const config: ForgeConfig = {
  packagerConfig: {
    asar: false,
    extraResource: './resources',
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({}),
    new MakerZIP({}, ['darwin']),
    new MakerRpm({}),
    new MakerDeb({}),
  ],
  plugins: [
    new VitePlugin({
      // `build` can specify multiple entry builds, which can be Main process, Preload scripts, Worker process, etc.
      // If you are familiar with Vite configuration, it will look really familiar.
      build: [
        {
          // `entry` is just an alias for `build.lib.entry` in the corresponding file of `config`.
          entry: 'src/main/main.ts',
          config: 'vite.main.config.ts',
          target: 'main',
        },
        {
          entry: 'src/main/preload.ts',
          config: 'vite.preload.config.ts',
          target: 'preload',
        },
      ],
      renderer: [
        {
          name: 'main_window',
          config: 'vite.renderer.config.ts',
        },
      ],
    }),
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: false,
    }),
  ],
  hooks: {
    packageAfterPrune: async (config, buildPath) => {
      const commands = [
        'install',
        '--no-package-lock',
        '--no-save',
        'typeorm',
        'sqlite3',
      ];

      return new Promise((resolve, reject) => {
        const oldPckgJson = path.join(buildPath, 'package.json');
        const newPckgJson = path.join(buildPath, '_package.json');

        fs.renameSync(oldPckgJson, newPckgJson);
        const workerPath = path.resolve(
          buildPath,
          '..',
          'resources',
          'data',
          'worker.js',
        );
        const npmRunWorker = spawn('node', [
          '--experimental-strip-types',
          'data/scripts/copy-worker.ts',
          workerPath,
        ]);

        npmRunWorker.on('error', (error: unknown) => {
          console.log(error);
          reject(error);
        });

        const npmInstall = spawn('npm', commands, {
          cwd: buildPath,
          stdio: 'inherit',
          shell: true,
        });

        npmInstall.on('close', (code: number) => {
          if (code === 0) {
            fs.renameSync(newPckgJson, oldPckgJson);

            /**
             * On windows code signing fails for ARM binaries etc.,
             * we remove them here
             */
            const problematicPaths = [
              'android-arm',
              'android-arm64',
              'darwin-x64+arm64',
              'linux-arm',
              'linux-arm64',
              'linux-x64',
            ];

            problematicPaths.forEach((binaryFolder) => {
              fs.rmSync(
                path.join(
                  buildPath,
                  'node_modules',
                  '@serialport',
                  'bindings-cpp',
                  'prebuilds',
                  binaryFolder,
                ),
                { recursive: true, force: true },
              );
            });

            resolve();
          } else {
            reject(new Error('process finished with error code ' + code));
          }
        });

        npmInstall.on('error', (error: unknown) => {
          reject(error);
        });
      });
    },
  },
};

export default config;
