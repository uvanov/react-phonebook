// Import modules
import React, { useMemo } from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Subtitle,
  MessageButton,
  IconButton,
  LargeTitle
} from '../UI/';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { contactsSlice } from '../../store/slices/ContactsSlice';

// Assets
import { ReactComponent as CallIcon } from '../../media/icons/call.svg';
import { ReactComponent as RemoveIcon } from '../../media/icons/remove.svg';
import { AboutContactList } from './AboutContactList';

// Styled Components
const Header = styled.div`
  display:flex;
  gap: 25px;
  grid-column: 2 / 3;
`;

const HeaderImage = styled.div`
  width: 114px;
  height: 114px;
  border-radius: 26px;    
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${ props => props.source }");
`;

const HeaderInformation = styled.div`
  display:flex;
  flex-direction: column;
`;

const HeaderButtons = styled.div`
  display:flex;
  gap: 6px;   
  margin-top: 21px;
`;

const ContactInformationGrid = styled.div`
  display: grid;
  grid-template-columns: .5fr 5fr;
  row-gap: 25px;
  column-gap: 34px;
  max-width: 600px;
`;

// Exports
export const ContactInformation = () => {

  const dispatch = useAppDispatch();
  const { removeContact } = contactsSlice.actions;
  const selectedContactId = useAppSelector(state => state.selectedContact.id);
  const contacts = useAppSelector(state => state.contacts);

  const selectedContact = useMemo(() => {
    let user = contacts.find(contact => contact.id === selectedContactId);

    return user ? user : null;
  }, [selectedContactId, contacts]);

  const removeContactHandler = (id) => {
    dispatch(removeContact({ id }));
  };

  if (selectedContact === null) {
    return (
      <h1>Need to select contact.</h1>
    );
  } else {
    return (
      <ContactInformationGrid>
        <Header>
          <HeaderImage source={ selectedContact.avatarUrl }/>
          <HeaderInformation>
            <LargeTitle text={ selectedContact.name }/>
            <Subtitle text={ selectedContact.status }/>
            <HeaderButtons>
              <MessageButton/>
              <IconButton
                size={ 'large' }
                Icon={ CallIcon }
              />
              <IconButton
                size={ 'large' }
                Icon={ RemoveIcon }
                onClick={ () => removeContactHandler(selectedContact.id) }
              />
            </HeaderButtons>
          </HeaderInformation>
        </Header>

        <AboutContactList contactInformation={ selectedContact.information }/>
      </ContactInformationGrid>
    );
    //    Todo: Show information about contact
  }
};

