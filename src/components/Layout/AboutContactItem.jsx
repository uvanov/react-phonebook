// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Styled Components
const Title = styled.span`
  font-size: 15px;
  color: #8083A3;
  text-transform: capitalize;
  text-align: right;
`;

const Children = styled.div`
  font-size: 15px;
  color: #1A1C1D;
`;

export const AboutContactItem = ({ title, children }) => (
  <>
    <Title>{ title }</Title>
    <Children>{ children }</Children>
  </>
);

