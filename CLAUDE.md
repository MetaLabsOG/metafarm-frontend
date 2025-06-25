# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based DeFi frontend application called Metafarm/Cometa - a yield farm and intelligent yield optimizer for the Algorand blockchain. It features farming pools, staking, swapping, zapping, and LaaS (Liquidity as a Service) functionality.

## Key Commands

### Development
```bash
# Install dependencies (includes vendored packages setup)
yarn install

# Start development server
yarn start

# Build for production
yarn build

# Build with production environment
yarn prod

# Build with development environment  
yarn dev

# Run tests
yarn test

# Lint code with XO
yarn lint

# Get linting summary
yarn lint-summary
```

### Environment Variables
- `DISABLE_ESLINT_PLUGIN=true` - Disabled for build performance
- `TSC_COMPILE_ON_ERROR=true` - Allows building with TypeScript errors
- `GENERATE_SOURCEMAP=false` - Disabled for production builds
- `CI=false` - Set to bypass CI-specific checks during builds

## Architecture

### State Management
The application uses **Effector** for state management with stores located in:
- `src/common/store/` - Global stores (account, assets, contracts, prices, time)
- `src/Farm/store.ts` - Farm-specific state
- `src/Stake/store.ts` - Staking state  
- `src/LaaS/store.ts` - LaaS state

### Core Technologies
- **React 18** with TypeScript
- **Effector** for state management
- **Styled Components** for styling
- **React Query** for data fetching
- **React Router** for navigation
- **Algorand SDK** and **Reach** for blockchain integration
- **XO** for linting (ESLint wrapper with opinionated defaults)

### Project Structure
```
src/
├── common/          # Shared utilities, stores, and styles
├── Components/      # Reusable UI components
├── Farm/           # Farming functionality
├── Stake/          # Staking functionality
├── LaaS/           # Liquidity as a Service
├── Swap/           # Token swapping
├── Zap/            # Zapping functionality
├── dexes/          # DEX integrations (Tinyman, Pact, Humble)
├── providers/      # API and data providers
├── utils/          # Utility functions (performance, mobile optimizations)
└── vendor/         # Vendored dependencies
```

### Performance Optimization

The app implements a Progressive Performance Enhancement System (`src/utils/performanceCache.ts`):
- Automatically detects device capabilities
- Starts with conservative settings for first-time visitors
- Progressively enhances based on performance metrics
- Implements crash recovery by downgrading settings
- Uses virtualized lists for pool rendering with configurable batch sizes

Key performance features:
- Pool list virtualization (`src/Farm/PoolList/VirtualizedPoolList.tsx`)
- Dynamic batch loading based on device performance
- Mobile-specific optimizations (`src/utils/mobileOptimizations.ts`)
- Performance monitoring hooks (`src/hooks/usePerformanceOptimization.ts`)

### Vendored Dependencies

Due to build issues on deployment servers, these dependencies are vendored in `src/vendor/`:
- `@metalabsog/distribution@17.0.4` and `@17.0.5`
- `@metalabsog/farm@17.2.4` and `@17.2.5`
- `js-conflux-sdk` (specific commit)

### DEX Integrations

The app integrates with multiple DEXes on Algorand:
- Tinyman v1 & v2 (`src/dexes/tinyman/`, `src/dexes/tinyman2/`)
- Pact (`src/dexes/pact.ts`)
- Humble (`src/dexes/humble.ts`)

### Styling Approach

- Uses Styled Components with TypeScript
- Global styles in `src/common/globalStyles.ts`
- Component-specific styles typically in `styled.ts` files
- Tailwind CSS available but used sparingly
- Performance-aware styling (animations/effects toggle based on device capability)

## Important Notes

### Code Style
- Uses XO linter with custom configuration (`.xo-config.js`)
- Prettier integration enabled
- TypeScript strict mode enabled
- Effector-specific ESLint rules applied

### Build Configuration
- Custom webpack configuration in `config/webpack.config.js`
- Uses Create React App as base (not ejected)
- Scripts customized in `scripts/` directory

### Testing
- Jest configured with TypeScript support
- Test files use `.test.ts` or `.spec.ts` extensions
- Located alongside source files or in `__tests__` directories

### Mobile Considerations
- Pool batch sizes can be configured via environment variables
- Mobile-specific CSS optimizations injected at runtime
- Performance scoring system adapts to device capabilities
- Crash detection and recovery for struggling devices