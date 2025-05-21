import React from 'react';
import { LoadingSpinnerContainer, SpinnerOverlay, Spinner, SpinnerText } from './styled';

interface LoadingSpinnerProps {
  isLoading: boolean;
  fullScreen?: boolean;
  text?: string;
  size?: 'small' | 'medium' | 'large';
  overlay?: boolean;
  children?: React.ReactNode;
}

/**
 * A reusable loading spinner component
 * @param isLoading - Whether the spinner should be displayed
 * @param fullScreen - Whether the spinner should take up the full screen
 * @param text - Optional text to display below the spinner
 * @param size - Size of the spinner (small, medium, large)
 * @param overlay - Whether to show an overlay behind the spinner
 * @param children - Content to display when not loading
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  isLoading,
  fullScreen = false,
  text,
  size = 'medium',
  overlay = false,
  children,
}) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  const spinner = (
    <>
      <Spinner size={size} />
      {text && <SpinnerText>{text}</SpinnerText>}
    </>
  );

  if (fullScreen) {
    return (
      <SpinnerOverlay fullScreen={fullScreen}>
        <LoadingSpinnerContainer>
          {spinner}
        </LoadingSpinnerContainer>
      </SpinnerOverlay>
    );
  }

  if (overlay) {
    return (
      <div style={{ position: 'relative' }}>
        {children}
        <SpinnerOverlay>
          <LoadingSpinnerContainer>
            {spinner}
          </LoadingSpinnerContainer>
        </SpinnerOverlay>
      </div>
    );
  }

  return (
    <LoadingSpinnerContainer>
      {spinner}
    </LoadingSpinnerContainer>
  );
};
