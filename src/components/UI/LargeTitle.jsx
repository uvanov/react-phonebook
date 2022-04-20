// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Styled Components
const LargeTitleWrapper = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #1A1C1D;
`;

export const LargeTitle = ({ text }) => {
  return (
    <LargeTitleWrapper>
      { text }
    </LargeTitleWrapper>
  );
};
