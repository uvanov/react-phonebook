// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Styled Components
const SubtitleWrapper = styled.span`
  font-size: 14px;
  color: #8083A3;
`;

// Exports
export const Subtitle = ({ text }) => (
  <SubtitleWrapper>
    { text }
  </SubtitleWrapper>
);

