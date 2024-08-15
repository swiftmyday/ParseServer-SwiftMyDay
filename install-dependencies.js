import { execSync } from 'child_process';

const installPackages = () => {
  try {
    console.log('Installing required packages...');
    execSync('npm install readline-sync crypto dotenv', { stdio: 'inherit' });
    console.log('Packages installed successfully.');
  } catch (error) {
    console.error('Error installing packages:', error.message);
    process.exit(1);
  }
};

const isMongoDBInstalled = () => {
  try {
    execSync('mongod --version', { stdio: 'ignore' });
    console.log('MongoDB is already installed.');
    return true;
  } catch (error) {
    return false;
  }
};

const installMongoDBMac = () => {
  try {
    console.log('Installing MongoDB for macOS...');
    execSync('curl -o mongodb-macos-x86_64-4.4.6.tgz https://fastdl.mongodb.org/osx/mongodb-macos-x86_64-4.4.6.tgz', { stdio: 'inherit' });
    execSync('tar -zxvf mongodb-macos-x86_64-4.4.6.tgz', { stdio: 'inherit' });
    execSync('sudo mv mongodb-macos-x86_64-4.4.6 /usr/local/mongodb', { stdio: 'inherit' });
    execSync('sudo ln -s /usr/local/mongodb/bin/* /usr/local/bin/', { stdio: 'inherit' });
    execSync('sudo mkdir -p /usr/local/var/mongodb', { stdio: 'inherit' });
    execSync('sudo mkdir -p /usr/local/var/log/mongodb', { stdio: 'inherit' });
    execSync('sudo chown -R `id -un` /usr/local/var/mongodb', { stdio: 'inherit' });
    execSync('sudo chown -R `id -un` /usr/local/var/log/mongodb', { stdio: 'inherit' });
    execSync('mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork', { stdio: 'inherit' });
    console.log('MongoDB installed successfully on macOS.');
  } catch (error) {
    console.error('Error installing MongoDB on macOS:', error.message);
    process.exit(1);
  }
};

const installMongoDBLinux = () => {
  try {
    console.log('Installing MongoDB for Linux...');
    execSync('wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -', { stdio: 'inherit' });
    execSync('echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list', { stdio: 'inherit' });
    execSync('sudo apt-get update && sudo apt-get install -y mongodb-org', { stdio: 'inherit' });
    execSync('sudo systemctl start mongod && sudo systemctl enable mongod', { stdio: 'inherit' });
    console.log('MongoDB installed successfully on Linux.');
  } catch (error) {
    console.error('Error installing MongoDB on Linux:', error.message);
    process.exit(1);
  }
};

const installMongoDB = () => {
  if (isMongoDBInstalled()) {
    return;
  }

  if (process.platform === 'darwin') {
    installMongoDBMac();
  } else if (process.platform === 'linux') {
    installMongoDBLinux();
  } else if (process.platform === 'win32') {
    console.log('Please install MongoDB manually from https://www.mongodb.com/try/download/community');
    process.exit(1);
  } else {
    console.log('Unsupported platform. Please install MongoDB manually.');
    process.exit(1);
  }
};

installPackages();
installMongoDB();
