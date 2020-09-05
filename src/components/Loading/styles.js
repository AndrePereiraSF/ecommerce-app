import styled, { keyframes } from 'styled-components';

export const frames = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg)
    }
`;

export const LoadingContainer = styled.div`
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
`;

export const LoadingAnimation = styled.div`
  height: 50px;
  width: 50px;
  border: 2px solid #faa014;
  border-bottom: none;
  border-radius: 999px;
  animation: ${frames} 1s linear;
  animation-iteration-count: infinite;
`;