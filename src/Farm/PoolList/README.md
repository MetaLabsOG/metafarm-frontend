# Pool List Virtualization

This directory contains the implementation of the virtualized pool list, which loads pools in batches to improve performance and prevent the app from crashing when there are many pools.

## Components

- `PoolList.tsx`: The main component that filters pools and renders the virtualized list.
- `VirtualizedPoolList.tsx`: The component that handles the batched loading of pools.
- `Pool.tsx`: The individual pool component that is rendered for each pool.

## How It Works

1. The `PoolList` component filters the pools based on user criteria (search, verified, ended, etc.).
2. The filtered pools are passed to the `VirtualizedPoolList` component.
3. The `VirtualizedPoolList` component renders only a subset of the pools initially.
4. As the user scrolls down, more pools are loaded in batches.

## Configuration

The batch size and initial batch size can be configured using environment variables:

- `REACT_APP_POOL_BATCH_SIZE`: The number of pools to load in each batch after the initial load (default: 10).
- `REACT_APP_POOL_INITIAL_BATCH_SIZE`: The number of pools to load initially (default: 20).

For production, these values are set higher to provide a better user experience:

- Production: `REACT_APP_POOL_BATCH_SIZE=20`, `REACT_APP_POOL_INITIAL_BATCH_SIZE=40`
- Development: `REACT_APP_POOL_BATCH_SIZE=10`, `REACT_APP_POOL_INITIAL_BATCH_SIZE=20`

## Performance Considerations

- The virtualized list only renders the pools that are visible to the user, which significantly reduces the DOM size and improves performance.
- Scroll events are debounced to prevent excessive calculations.
- When a specific pool is requested via the URL (priorityPoolId), all pools are loaded to ensure the requested pool is visible.
- The loading of additional pools is done asynchronously to prevent UI freezing.

## Mobile Optimization

The virtualized list is especially important for mobile devices, which have limited resources. The batch sizes can be adjusted based on the device type if needed.
