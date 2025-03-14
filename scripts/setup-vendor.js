const fs = require('fs-extra');
const path = require('path');

// Define paths
const rootDir = path.resolve(__dirname, '..');
const vendorDir = path.join(rootDir, 'src', 'vendor');
const nodeModulesDir = path.join(rootDir, 'node_modules');

// Ensure node_modules exists
if (!fs.existsSync(nodeModulesDir)) {
  fs.mkdirSync(nodeModulesDir, { recursive: true });
}

// Copy js-conflux-sdk to node_modules
const confluxSdkSrc = path.join(vendorDir, 'js-conflux-sdk');
const confluxSdkDest = path.join(nodeModulesDir, 'js-conflux-sdk');

if (fs.existsSync(confluxSdkSrc)) {
  console.log('Setting up vendored js-conflux-sdk...');
  
  // Remove existing directory if it exists
  if (fs.existsSync(confluxSdkDest)) {
    fs.removeSync(confluxSdkDest);
  }
  
  // Copy the directory
  fs.copySync(confluxSdkSrc, confluxSdkDest);
  console.log('Successfully copied js-conflux-sdk to node_modules');
} else {
  console.error('Could not find vendored js-conflux-sdk at', confluxSdkSrc);
  process.exit(1);
}

// Copy metalabs-common to node_modules
const commonSrc = path.join(vendorDir, 'metalabs-common-17_0_0');
const commonDest = path.join(nodeModulesDir, '@metalabsog/common');

if (fs.existsSync(commonSrc)) {
  console.log('Setting up vendored @metalabsog/common...');
  
  // Remove existing directory if it exists
  if (fs.existsSync(commonDest)) {
    fs.removeSync(commonDest);
  }
  
  // Copy the directory
  fs.copySync(commonSrc, commonDest);
  console.log('Successfully copied @metalabsog/common to node_modules');
} else {
  console.warn('Could not find vendored @metalabsog/common at', commonSrc);
}

// Install husky if it exists
try {
  if (fs.existsSync(path.join(rootDir, '.husky'))) {
    require('husky').install();
    console.log('Husky hooks installed');
  }
} catch (error) {
  console.log('Skipping husky installation:', error.message);
}

console.log('Vendor setup complete'); 