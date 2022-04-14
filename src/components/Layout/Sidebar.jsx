// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  IconButton,
  LargeTitle
} from '../UI';
import { ContactList } from './ContactList';

// Assets
import { ReactComponent as NavigationButton } from '../../media/icons/burger.svg';


// Styled Components
const SidebarWrapper = styled.div`
  background-color: #FAF9FF;
`;

const SidebarHeader = styled.div`
  display:flex;
  align-items:center;
  gap: 15px;
  padding: 0 32px;
  height: 84px;
  box-sizing: border-box;
  border-bottom: 2px solid #ECEEF5;
`;

const ContactListWrapper = styled.div`
  padding: 28px 32px 34px 32px;
  height: auto;
`;

// Exports
export const Sidebar = () => {

  return (
    <SidebarWrapper>
      <SidebarHeader>
        <IconButton
          size={ 'medium' }
          Icon={ NavigationButton }
        />
        <LargeTitle text={ 'Contacts' }/>
      </SidebarHeader>

      <ContactListWrapper>
        <ContactList/>
      </ContactListWrapper>
    </SidebarWrapper>
  );
};

