import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PoolWithStats } from '../store';
import { ContractInfo, FarmType } from '../../common/store';
import { Pool } from './Pool';
import styled from 'styled-components';
import { DEBOUNCE_TIMES } from '../../utils/performance';

// Default batch sizes for different environments
const DEFAULT_BATCH_SIZE = 10;
const DEFAULT_INITIAL_BATCH_SIZE = 20;

// Get environment variables for batch sizes or use defaults
const BATCH_SIZE = Number(process.env.REACT_APP_POOL_BATCH_SIZE) || DEFAULT_BATCH_SIZE;
const INITIAL_BATCH_SIZE = Number(process.env.REACT_APP_POOL_INITIAL_BATCH_SIZE) || DEFAULT_INITIAL_BATCH_SIZE;

// Container for the virtualized list with proper styling
const VirtualizedContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: visible;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 6px;
  }
`;

// Loading indicator for when more pools are being loaded
const LoadingIndicator = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  color: #8bff74;
  font-family: 'Montserrat';
  font-size: 14px;
  opacity: 0.8;
  transition: all 0.3s ease;
  flex-basis: 100%; /* Ensure it takes full width in flex container */

  &:hover {
    opacity: 1;
    text-shadow: 0 0 10px rgba(139, 255, 116, 0.5);
    cursor: pointer;
  }

  @media (max-width: 700px) {
    padding: 15px 0;
    font-size: 12px;
  }
`;

interface VirtualizedPoolListProps {
  filteredPools: PoolWithStats[];
  initEvent: (payload: ContractInfo<FarmType>) => any;
  priorityPoolId?: string | null;
}

export const VirtualizedPoolList: React.FC<VirtualizedPoolListProps> = ({
  filteredPools,
  initEvent,
  priorityPoolId
}) => {
  // State to track how many pools to render
  const [visibleCount, setVisibleCount] = useState(
    priorityPoolId ? filteredPools.length : INITIAL_BATCH_SIZE
  );

  // State to track if we're loading more pools
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Reference to the container element for scroll detection
  const containerRef = useRef<HTMLDivElement>(null);

  // Reference to track if we have a scroll listener attached
  const hasScrollListener = useRef(false);

  // Timeout reference for debouncing scroll events
  const scrollTimeoutRef = useRef<number | null>(null);

  // Function to load more pools when scrolling
  const loadMorePools = useCallback(() => {
    if (visibleCount >= filteredPools.length) {
      return; // All pools are already visible
    }

    setIsLoadingMore(true);

    // Use setTimeout to simulate asynchronous loading and prevent UI freezing
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + BATCH_SIZE, filteredPools.length));
      setIsLoadingMore(false);
    }, 100);
  }, [visibleCount, filteredPools.length]);

  // Handle scroll events to load more pools when approaching the bottom
  const handleScroll = useCallback(() => {
    // Clear any existing timeout to debounce scroll events
    if (scrollTimeoutRef.current !== null) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    // Set a new timeout
    scrollTimeoutRef.current = window.setTimeout(() => {
      if (!containerRef.current) return;

      // Get the scroll position and viewport height
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Load more when user scrolls to 80% of the current content
      if (scrollY + viewportHeight > documentHeight * 0.8) {
        loadMorePools();
      }
    }, DEBOUNCE_TIMES.scroll);
  }, [loadMorePools]);

  // Set up scroll listener when component mounts
  useEffect(() => {
    // If we have a priority pool ID, show all pools
    if (priorityPoolId) {
      setVisibleCount(filteredPools.length);
      return;
    }

    // Add scroll event listener
    if (!hasScrollListener.current) {
      window.addEventListener('scroll', handleScroll);
      hasScrollListener.current = true;
    }

    // Clean up event listener when component unmounts
    return () => {
      if (hasScrollListener.current) {
        window.removeEventListener('scroll', handleScroll);
        hasScrollListener.current = false;
      }

      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll, priorityPoolId, filteredPools.length]);

  // Update visible count when filtered pools change
  useEffect(() => {
    // If we have a priority pool ID, show all pools
    if (priorityPoolId) {
      setVisibleCount(filteredPools.length);
      return;
    }

    // Only reset to initial batch if the user hasn't loaded more pools yet
    // or if the filtered pools array has actually changed in length
    setVisibleCount(prev => {
      // If user has loaded more than initial batch, don't reset unless pools array changed
      if (prev > INITIAL_BATCH_SIZE && prev <= filteredPools.length) {
        return prev; // Keep the current count
      }
      // Otherwise, reset to initial batch size
      return Math.min(INITIAL_BATCH_SIZE, filteredPools.length);
    });
  }, [filteredPools.length, priorityPoolId]); // Only depend on length, not the entire array

  // Render only the visible pools
  const visiblePools = filteredPools.slice(0, visibleCount);

  return (
    <VirtualizedContainer ref={containerRef}>
      {visiblePools.map((pws: PoolWithStats) => (
        <Pool
          key={pws.pool.id}
          pws={pws}
          isForcedOpen={priorityPoolId ? pws.pool.id === Number(priorityPoolId) : false}
          initEvent={initEvent}
        />
      ))}

      {isLoadingMore && (
        <LoadingIndicator>
          Loading more pools...
        </LoadingIndicator>
      )}

      {!isLoadingMore && visibleCount < filteredPools.length && (
        <LoadingIndicator onClick={loadMorePools}>
          Click to load more pools ({visibleCount} of {filteredPools.length})
        </LoadingIndicator>
      )}
    </VirtualizedContainer>
  );
};
