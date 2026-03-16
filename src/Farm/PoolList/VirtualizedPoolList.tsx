import React, { useRef, useMemo, useState, useEffect } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { PoolWithStats } from '../store';
import { ContractInfo, FarmType } from '../../common/store';
import { Pool } from './Pool';
import { useWindowSize } from '../../hooks';
import styled from 'styled-components';

const DESKTOP_ITEM_HEIGHT = 130;
const MOBILE_ITEM_HEIGHT = 160;
const HEADER_OFFSET = 300;

const VirtualizedContainer = styled.div`
  width: 100%;
  position: relative;
`;

const PoolRow = styled.div`
  padding: 0 2px;
`;

const EmptyState = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0;
  color: var(--accent-muted);
  font-family: var(--font-body);
  font-size: 14px;
  opacity: 0.8;
`;

interface ItemData {
  filteredPools: PoolWithStats[];
  initEvent: (payload: ContractInfo<FarmType>) => any;
  priorityPoolId: string | null | undefined;
  currentBlock: number;
  openConnectWallet: () => void;
}

// Stable component reference — react-window won't unmount/remount on data changes
const PoolRowRenderer = React.memo(
  ({ index, style, data }: ListChildComponentProps<ItemData>) => {
    const { filteredPools, initEvent, priorityPoolId, currentBlock, openConnectWallet } = data;
    const pws = filteredPools[index];
    return (
      <PoolRow style={style}>
        <Pool
          pws={pws}
          isForcedOpen={priorityPoolId ? pws.pool.id === Number(priorityPoolId) : false}
          initEvent={initEvent}
          currentBlock={currentBlock}
          openConnectWallet={openConnectWallet}
        />
      </PoolRow>
    );
  }
);

// Module-level stable function — never recreated
const getItemKey = (index: number, data: ItemData) => data.filteredPools[index].pool.id;

interface VirtualizedPoolListProps {
  filteredPools: PoolWithStats[];
  initEvent: (payload: ContractInfo<FarmType>) => any;
  priorityPoolId?: string | null;
  currentBlock: number;
  openConnectWallet: () => void;
}

export const VirtualizedPoolList: React.FC<VirtualizedPoolListProps> = ({
  filteredPools,
  initEvent,
  priorityPoolId,
  currentBlock,
  openConnectWallet
}) => {
  const listRef = useRef<List>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [listHeight, setListHeight] = useState(() =>
    typeof window !== 'undefined' ? window.innerHeight - HEADER_OFFSET : 600
  );

  useEffect(() => {
    const updateHeight = () => {
      const top = containerRef.current?.getBoundingClientRect().top ?? HEADER_OFFSET;
      setListHeight(Math.max(400, window.innerHeight - top - 20));
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const { isMobile } = useWindowSize();
  const itemHeight = isMobile ? MOBILE_ITEM_HEIGHT : DESKTOP_ITEM_HEIGHT;

  const priorityIndex = useMemo(() => {
    if (!priorityPoolId) return -1;
    return filteredPools.findIndex(p => p.pool.id === Number(priorityPoolId));
  }, [filteredPools, priorityPoolId]);

  // Pass data via itemData — Row component stays referentially stable
  const itemData = useMemo<ItemData>(() => ({
    filteredPools,
    initEvent,
    priorityPoolId,
    currentBlock,
    openConnectWallet,
  }), [filteredPools, initEvent, priorityPoolId, currentBlock, openConnectWallet]);

  if (filteredPools.length === 0) {
    return (
      <EmptyState>
        No pools found
      </EmptyState>
    );
  }

  return (
    <VirtualizedContainer ref={containerRef}>
      <List
        ref={listRef}
        height={listHeight}
        itemCount={filteredPools.length}
        itemSize={itemHeight}
        itemData={itemData}
        itemKey={getItemKey}
        width="100%"
        overscanCount={3}
        initialScrollOffset={priorityIndex >= 0 ? priorityIndex * itemHeight : 0}
      >
        {PoolRowRenderer}
      </List>
    </VirtualizedContainer>
  );
};
