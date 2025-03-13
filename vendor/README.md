# Vendored Dependencies

This directory contains local copies of dependencies that were causing build issues on the DigitalOcean server.

## Included Packages

- `metalabs-distribution-17_0_4` (from `@metalabsog/distribution@17.0.4`)
- `metalabs-distribution-17_0_5` (from `@metalabsog/distribution@17.0.5`)
- `metalabs-farm-17_2_4` (from `@metalabsog/farm@17.2.4`)
- `metalabs-farm-17_2_5` (from `@metalabsog/farm@17.2.5`)

## Why Vendoring?

These packages were causing build failures on the DigitalOcean server due to dependency resolution issues. By including them directly in the repository, we ensure consistent builds across all environments.

## Maintenance

If these packages need to be updated:

1. Install the new version locally
2. Copy the updated package from `node_modules` to this directory
3. Update the imports in the codebase to use the new version 