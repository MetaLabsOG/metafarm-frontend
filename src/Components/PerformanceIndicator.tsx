import React from 'react';
import styled from 'styled-components';
import { usePerformanceOptimization } from '../hooks';

const IndicatorContainer = styled.div<{ show: boolean }>`
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(255, 165, 0, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  z-index: 1000;
  opacity: ${props => props.show ? 1 : 0};
  transform: translateY(${props => props.show ? '0' : '-20px'});
  transition: all 0.3s ease;
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  
  @media (max-width: 768px) {
    top: 5px;
    right: 5px;
    font-size: 11px;
    padding: 6px 10px;
  }
`;

const ScoreText = styled.div`
  font-size: 10px;
  opacity: 0.8;
  margin-top: 2px;
`;

export function PerformanceIndicator() {
  const { isFirstVisit, shouldUseConservativeMode, performanceScore } = usePerformanceOptimization();
  
  const showIndicator = isFirstVisit || shouldUseConservativeMode();
  
  if (!showIndicator) return null;
  
  return (
    <IndicatorContainer show={showIndicator}>
      {isFirstVisit ? '🚀 Optimizing for your device...' : '⚡ Performance mode'}
      <ScoreText>Score: {performanceScore}/100</ScoreText>
    </IndicatorContainer>
  );
} 