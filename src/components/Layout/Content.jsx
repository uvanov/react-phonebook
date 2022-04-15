// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { ContactInformation } from './ContactInformation';
import { UserControls } from './UserControls';

// Styled Components
const ContentInnerWrapper = styled.div`
  padding: 120px 60px;
  box-sizing: border-box;
`;

// Exports
export const Content = () => (
  <div>
    <UserControls/>
    <ContentInnerWrapper>
      <ContactInformation/>
    </ContentInnerWrapper>
  </div>
);

