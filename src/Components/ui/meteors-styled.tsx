import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const meteorEffect = keyframes`
  0% { transform: rotate(215deg) translateX(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: rotate(215deg) translateX(-1500px); opacity: 0; }
`;

const MeteorSpan = styled.span`
  position: fixed;
  height: 2px;
  width: 2px;
  border-radius: 9999px;
  background-color: #8bff74; /* Changed from #a3a3a3 to green */
  box-shadow: 0 0 4px 2px rgba(139, 255, 116, 0.2);
  transform: rotate(215deg);
  animation: ${meteorEffect} 5s linear infinite;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 150px;
    height: 1px;
    background: linear-gradient(to right, rgba(139, 255, 116, 0.8), transparent);
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

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const meteors = new Array(number).fill(true);

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
