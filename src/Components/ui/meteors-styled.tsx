import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Define different keyframes for desktop and mobile
const meteorEffectDesktop = keyframes`
  0% { transform: rotate(215deg) translateX(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: rotate(215deg) translateX(-1500px); opacity: 0; }
`;

// Simpler animation for mobile with shorter distance
const meteorEffectMobile = keyframes`
  0% { transform: rotate(215deg) translateX(0); opacity: 1; }
  100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
`;

// We'll use these in the styled component with media queries

const MeteorSpan = styled.span.attrs({
  className: 'meteor-element'
})`
  position: fixed;
  height: 2px;
  width: 2px;
  border-radius: 9999px;
  background-color: #05ff00; /* Brighter green */
  box-shadow: 0 0 6px 3px rgba(5, 255, 0, 0.3);
  transform: rotate(215deg);
  animation: ${meteorEffectDesktop} 5s linear infinite;
  z-index: 0;

  @media (max-width: 768px) {
    /* Simplified meteor for mobile */
    box-shadow: none;
    height: 1px;
    width: 1px;
    animation: ${meteorEffectMobile} 3s linear infinite; /* Faster animation for mobile */

    &::before {
      width: 50px; /* Shorter trail for mobile */
      background: linear-gradient(to right, rgba(5, 255, 0, 0.7), transparent);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 150px;
    height: 1px;
    background: linear-gradient(to right, rgba(5, 255, 0, 0.9), transparent);
  }
`;

export const Meteors = ({
  number = 100
}: {
  number?: number;
}) => {
  const [dimensions, setDimensions] = useState({
    height: typeof window !== 'undefined' ? window.innerHeight : 1000,
    width: typeof window !== 'undefined' ? window.innerWidth : 1000
  });

  // Reduce number of meteors on mobile
  const [actualNumber, setActualNumber] = useState(number);

  useEffect(() => {
    const handleResize = () => {
      const newDimensions = {
        height: window.innerHeight,
        width: window.innerWidth
      };
      setDimensions(newDimensions);

      // Adjust number of meteors based on screen size
      if (newDimensions.width <= 768) {
        // Use a much smaller number for mobile
        setActualNumber(Math.min(5, number));
      } else {
        setActualNumber(number);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [number]);

  // Create array with reduced number of meteors
  const meteors = new Array(actualNumber).fill(true);

  return (
    <>
      {meteors.map((_, idx) => (
        <MeteorSpan
          key={"meteor" + idx}
          style={{
            top: Math.floor(Math.random() * dimensions.height) + "px",
            left: Math.floor(Math.random() * dimensions.width) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        />
      ))}
    </>
  );
};
