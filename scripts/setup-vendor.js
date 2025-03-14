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

// List of packages to copy
const packages = [
  {
    src: 'js-conflux-sdk',
    dest: 'js-conflux-sdk'
  },
  {
    src: 'metalabs-common-17_0_0',
    dest: '@metalabsog/common'
  },
  {
    src: 'metalabs-metafomo-17_0_0',
    dest: '@metalabsog/metafomo'
  }
];

// Copy each package
for (const pkg of packages) {
  const srcPath = path.join(vendorDir, pkg.src);
  const destPath = path.join(nodeModulesDir, pkg.dest);

  if (fs.existsSync(srcPath)) {
    console.log(`Setting up vendored ${pkg.src}...`);
    
    // Remove existing directory if it exists
    if (fs.existsSync(destPath)) {
      fs.removeSync(destPath);
    }
    
    // Create parent directory if needed
    fs.mkdirpSync(path.dirname(destPath));
    
    // Copy the directory
    fs.copySync(srcPath, destPath);
    console.log(`Successfully copied ${pkg.src} to ${pkg.dest}`);
  } else {
    console.error(`Could not find vendored package at ${srcPath}`);
    process.exit(1);
  }
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