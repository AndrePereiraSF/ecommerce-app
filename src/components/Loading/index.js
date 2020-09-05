import React from 'react';

import {
  LoadingContainer,
  LoadingAnimation
} from './styles';

export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingAnimation />
    </LoadingContainer>
  );
}