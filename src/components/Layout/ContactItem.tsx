import React from 'react';
import styled from '@emotion/styled';

// TODO: Добавить алёрт о недоступности звонка

// Local modules
import { IconButton } from '../UI';
import { useAppDispatch } from '../../hooks/redux';
import { contactsSlice } from '../../store/slices/ContactsSlice';

// Assets
import { ReactComponent as MessageIcon } from '../../media/icons/message.svg';
import { ReactComponent as CallIcon } from '../../media/icons/call.svg';
import { ReactComponent as RemoveIcon } from '../../media/icons/remove.svg';

// Styled Components
const ContactItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 36px 3fr 2fr;
  column-gap: 18px;
  padding: 10px;
  cursor: pointer;
  border-radius: 2px;
    
  &:hover{
    background: rgba(208,202,255,0.32);
  }
`;

const ContactImageWrapper = styled.div`
  position: relative;
`;

const ContactImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ContactOnlineMarker = styled.div<{ isOnline: boolean }>`
  width: 8px;
  height: 8px;
  background: ${({ isOnline }) => isOnline ? '#28C345' : '#F6933E' };
  border: 3px solid white;
  border-radius: 100%;
      
  position:absolute;
  bottom: 0;
  right: -4px;
`;

const ContactInformation = styled.div`
  display:flex;
  flex-direction: column;
  padding-top: 2px;
`;

const ContactName = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #1A1C1D;
`;

const ContactStatus = styled.span`
  font-size: 14px;
  color: #8083A3;
`;

const ContactButtons = styled.div`
  display:flex;
  justify-content:flex-end;
  gap: 6px;
`;

// Types
interface Props {
  contactId: number;
  avatarUrl: string;
  isOnline: boolean;
  contactName: string;
  contactStatus: string
}

// Exports
export const ContactItem: React.FC<Props> = (
  {
    contactId,
    avatarUrl,
    isOnline,
    contactName,
    contactStatus
  }) => {

  const dispatch = useAppDispatch();
  const { removeContact } = contactsSlice.actions;

  const removeContactHandler = (id: number) => {
    dispatch(removeContact({ id: id }));
  }

  return (
    <>
      <ContactItemWrapper onClick={ () => console.log('Select contact, ContactItem') }>
        <ContactImageWrapper>
          <ContactImage src={ avatarUrl }/>
          <ContactOnlineMarker isOnline={ isOnline }/>
        </ContactImageWrapper>
        <ContactInformation>
          <ContactName>{ contactName }</ContactName>
          <ContactStatus>{ contactStatus }</ContactStatus>
        </ContactInformation>
        <ContactButtons>
          <IconButton size={ 'medium' } Icon={ MessageIcon }/>
          <IconButton size={ 'medium' } Icon={ CallIcon }/>
          <IconButton size={ 'medium' } Icon={ RemoveIcon } onClick={ () => removeContactHandler(contactId) }/>
        </ContactButtons>
      </ContactItemWrapper>
    </>
  )
};

