import * as fs from 'fs';
import * as path from 'path';

const envFile = process.env.ENV_FILE || '.env';
const srcPath = path.resolve(__dirname, '..', envFile);
const destPath = path.resolve(
  __dirname,
  '..',
  '..',
  'resources',
  'data',
  '.env',
);

if (fs.existsSync(srcPath)) {
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied ${envFile} to resources/.env`);
} else {
  console.error(`Error: ${envFile} not found!`);
  process.exit(1);
}
