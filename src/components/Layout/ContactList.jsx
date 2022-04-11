// Import modules
import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';

// Local modules
import { ContactItem } from './ContactItem';
import { Search } from './Search';
import { NoContactsError } from './NoContactsError';

// Styled Components
const ContactListWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const ContactList = ({ contacts, setContacts, setSelectedContactId, removeContactFunction }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Нужно возврощать массив и его в цикл списка засунуть

  const searchedContacts = useMemo(() => {
    if (searchQuery) {
      let filteredContactsArray = contacts.filter(contact => contact.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
      return filteredContactsArray;
    }
    return contacts;
  }, [contacts, searchQuery]);

  return (
    <div>
      <Search setSearchQueryState={ setSearchQuery }/>
      {
        searchedContacts.length
          ?
          <>
            <ContactListWrapper>
              {
                searchedContacts.map(contact => (
                  <ContactItem
                    key={ contact.id }
                    contactId={ contact.id }
                    contactName={ `${ contact.name }` }
                    isOnline={ true }
                    avatarUrl={ contact.avatarUrl }
                    contactStatus={ contact.status }
                    removeContact={ removeContactFunction }
                    setSelectedContactId={ setSelectedContactId }
                  />
                ))
              }
            </ContactListWrapper>
          </>
          :
          <NoContactsError searchQuery={ searchQuery }/>
      }
    </div>
  );
};
