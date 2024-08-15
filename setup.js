import fs from 'fs';
import readlineSync from 'readline-sync';
import crypto from 'crypto';
import { exec } from 'child_process';

// Clear the console
console.clear();

// Function to generate a random alphanumeric string of 32 characters
const generateRandomString = () => {
  return crypto.randomBytes(16).toString('hex');
};

// Function to prompt the user for input
const getInput = (prompt) => {
  return readlineSync.question(prompt);
};

// Function to create the .env file
const createEnvFile = () => {
  // Generate random APP_ID and MASTER_KEY
  const APP_ID = generateRandomString();
  const MASTER_KEY = generateRandomString();

  //Welcome text
  console.log("\n");
  console.log("🔵 Welcome to Parse Server local version 🔵")
  console.log("          ⚡️ Swift my day ⚡️       ");
  console.log("\n");
  console.log("\n");

  // Ask the user if they want to connect to a remote MongoDB
  const useRemoteMongoDB = readlineSync.keyInYN('Would you like to connect your server to a remote MongoDB?');
  let DATABASE_URI = 'mongodb://localhost:27017/parseseverdatabase'; // default local MongoDB URI
  if (useRemoteMongoDB) {
    DATABASE_URI = getInput('Please enter your MongoDB DATABASE_URI: ');
  }else{
    console.log('✔️ Local MongoDB has been created');
  }
  console.log("\n");

  // Ask the user if they want to connect to an AWS S3 bucket
  const useAWSS3 = readlineSync.keyInYN('Would you like to connect your server to an AWS S3 bucket?');
  let AWS_ACCESS_KEY_ID = '';
  let AWS_SECRET_ACCESS_KEY = '';
  let BUCKET_NAME = '';
  if (useAWSS3) {
    AWS_ACCESS_KEY_ID = getInput('Please enter your AWS_ACCESS_KEY_ID: ');
    AWS_SECRET_ACCESS_KEY = getInput('Please enter your AWS_SECRET_ACCESS_KEY: ');
    BUCKET_NAME = getInput('Please enter your BUCKET_NAME: ');
  }else{
    console.log('✔️ Local MongoDB will be used to store files');
  }
  console.log("\n");

  // Create .env file content
  const envContent = `
APP_ID=${APP_ID}
MASTER_KEY=${MASTER_KEY}
DATABASE_URI=${DATABASE_URI}
${useAWSS3 ? `AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}` : ''}
${useAWSS3 ? `AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}` : ''}
${useAWSS3 ? `BUCKET_NAME=${BUCKET_NAME}` : ''}
LOCAL_DEV=true
  `;

  // Write .env file
  fs.writeFileSync('.env', envContent.trim());
  console.log('✔️ .env file has been created successfully.');

  return { APP_ID, MASTER_KEY };
};

// Function to create the config.js file
const createConfigFile = () => {
  const configContent = `
import dotenv from 'dotenv';

dotenv.config();
  `;

  fs.writeFileSync('config.js', configContent.trim());
  console.log('✔️ config.js file has been created successfully.');
  console.log("\n");
};


// Function to install project dependencies
const installDependencies = (callback) => {
  exec('npm install', (error, stdout, stderr) => {
    // console.log(`stdout: ${stdout}`);
    if (error) {
      console.error(`Error installing dependencies: ${error.message}`);
    } else if (stderr) {
      console.error(`stderr: ${stderr}`);
    } else {
      console.log('✔️ Dependencies installed successfully.');
    }
    callback();
  });
};

// Execute the setup process
const setup = () => {
  const { APP_ID, MASTER_KEY } = createEnvFile();
  createConfigFile();
  installDependencies(() => {
    // Print setup completion message
    console.log('✅ Parse server Setup has been completed successfully! 🎉');
    console.log('\n')
    console.log(`🔑 Your APP ID -> ${APP_ID}`);
    console.log(`🔐 Your MASTER KEY -> ${MASTER_KEY}`);
    console.log('\n')
    console.log('All credentials are also available in the .env file');
    console.log('\n')
    console.log('► start the server with `npm start`');
    console.log('\n')
  });
};


setup();
