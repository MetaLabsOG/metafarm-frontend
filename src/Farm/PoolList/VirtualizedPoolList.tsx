import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { PoolWithStats } from '../store';
import { ContractInfo, FarmType } from '../../common/store';
import { Pool } from './Pool';
import styled from 'styled-components';
import { DEBOUNCE_TIMES } from '../../utils/performance';
import { getPerformanceManager } from '../../utils/performanceCache';

// Default batch sizes for different environments
const DEFAULT_BATCH_SIZE = 10;
const DEFAULT_INITIAL_BATCH_SIZE = 20;
const DEFAULT_MOBILE_INITIAL_BATCH_SIZE = 3; // Fallback for very slow devices

// Get environment variables for batch sizes or use defaults
const BATCH_SIZE = Number(process.env.REACT_APP_POOL_BATCH_SIZE) || DEFAULT_BATCH_SIZE;
const INITIAL_BATCH_SIZE = Number(process.env.REACT_APP_POOL_INITIAL_BATCH_SIZE) || DEFAULT_INITIAL_BATCH_SIZE;

// Determine initial batch size based on device type and performance cache
const getInitialBatchSize = () => {
  const perfManager = getPerformanceManager();
  const settings = perfManager.getSettings();
  
  // Use performance-aware batch size
  return settings.batchSize;
};

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
  const perfManager = getPerformanceManager();
  const settings = perfManager.getSettings();
  
  const [visibleCount, setVisibleCount] = useState(
    priorityPoolId ? filteredPools.length : getInitialBatchSize()
  );

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const hasScrollListener = useRef(false);

  const scrollTimeoutRef = useRef<number | null>(null);

  const loadMorePools = useCallback(() => {
    if (visibleCount >= filteredPools.length) {
      return; // All pools are already visible
    }

    setIsLoadingMore(true);

    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + BATCH_SIZE, filteredPools.length));
      setIsLoadingMore(false);
    }, 100);
  }, [visibleCount, filteredPools.length]);

  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current !== null) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      if (!containerRef.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + viewportHeight > documentHeight * 0.8) {
        loadMorePools();
      }
    }, DEBOUNCE_TIMES.scroll);
  }, [loadMorePools]);

  useEffect(() => {
    if (priorityPoolId) {
      setVisibleCount(filteredPools.length);
      return;
    }

    if (!hasScrollListener.current) {
      window.addEventListener('scroll', handleScroll);
      hasScrollListener.current = true;
    }

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

  useEffect(() => {
    if (priorityPoolId) {
      setVisibleCount(filteredPools.length);
      return;
    }

    setVisibleCount(prev => {
      if (prev > getInitialBatchSize() && prev <= filteredPools.length) {
        return prev;
      }
      return Math.min(getInitialBatchSize(), filteredPools.length);
    });
  }, [filteredPools.length, priorityPoolId]);

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
