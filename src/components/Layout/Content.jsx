// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import ContactInformation from '../layout/ContactInformation';
import UserControls from '../layout/UserControls';

// Styled Components
const ContentInnerWrapper = styled.div`
  padding: 120px 60px;
  box-sizing: border-box;
`;

// Exports
export const Content = ({ selectedContact, removeContactFunction }) => (
    <div>
      <UserControls/>
      <ContentInnerWrapper>
        <ContactInformation
          selectedContact={ selectedContact }
          removeContactFunction={ removeContactFunction }
        />
      </ContentInnerWrapper>
    </div>
);

