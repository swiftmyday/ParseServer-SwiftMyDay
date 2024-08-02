import crypto from 'crypto';
import fs from 'fs';

const generateKey = () => crypto.randomBytes(16).toString('hex'); // 32 characters

const appId = generateKey();
const masterKey = generateKey();

const envContent = `APP_ID=${appId}\nMASTER_KEY=${masterKey}\n`;

fs.writeFileSync('.env', envContent);

console.log('Environment variables have been generated and saved to .env file.');
