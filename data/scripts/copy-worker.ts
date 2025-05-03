import { exec } from 'child_process';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('No script path provided.');
  process.exit(1);
}

const scriptPath = args[0];

exec(
  `npx esbuild src/main/modules/fight/domain/worker/fight.task.ts --minify --bundle --platform=node --target=node18 --outfile=${scriptPath}`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
  },
);
