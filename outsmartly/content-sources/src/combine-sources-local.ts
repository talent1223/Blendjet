import { combineSources } from './combine-sources';
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
dotenv.config({ path: '.env' });

/**
 * Runs `combineSources()` during local development, using our local .env
 */
async function run() {
  const data = await combineSources();
  fs.writeFileSync('./api.json', JSON.stringify(data, null, 2).concat('\n'));

  console.log('\n> √ API data created successfully.\n');
}

run();
