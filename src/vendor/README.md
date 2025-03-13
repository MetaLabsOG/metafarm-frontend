# Vendored Dependencies

This directory contains local copies of dependencies that were causing build issues on the DigitalOcean server.

## Included Packages

- `metalabs-distribution-17_0_4` (from `@metalabsog/distribution@17.0.4`)
- `metalabs-distribution-17_0_5` (from `@metalabsog/distribution@17.0.5`)
- `metalabs-farm-17_2_4` (from `@metalabsog/farm@17.2.4`)
- `metalabs-farm-17_2_5` (from `@metalabsog/farm@17.2.5`)
- `js-conflux-sdk` (from `https://github.com/reach-sh/js-conflux-sdk.git#commit=6df5f0538c2077a7e29f0be08205b937499a1040`)

## Why Vendoring?

These packages were causing build failures on the DigitalOcean server due to dependency resolution issues. By including them directly in the repository, we ensure consistent builds across all environments.

## Special Handling for js-conflux-sdk

The `js-conflux-sdk` package is a transitive dependency of `@reach-sh/stdlib`. We've implemented the following solution:

1. Created a mock implementation in `src/vendor/js-conflux-sdk/index.js`
2. Added a webpack alias to redirect imports to our vendored version
3. Added a resolution in package.json to use our vendored version
4. Created a patch for @reach-sh/stdlib to remove its direct dependency on the GitHub repository

## Maintenance

If these packages need to be updated:

1. Install the new version locally
2. Copy the updated package from `node_modules` to this directory
3. Update the imports in the codebase to use the new version 