// Import modules
import React, { useMemo } from 'react';
import styled from '@emotion/styled';
// Local modules
import { Search } from './Search';
import { useAppSelector } from '../../hooks/redux';
import { ContactItem } from './ContactItem';
import { NoContactsError } from './NoContactsError';

// Styled Components
const ContactListWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const ContactList = () => {
  const contacts = useAppSelector(state => state.contacts);
  const searchQuery = useAppSelector(state => state.search.query);

  // Нужно возврощать массив и его в цикл списка засунуть

  const preparedContactArray = useMemo(() => {
    if (searchQuery) {
      return contacts.filter(contact => contact.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
    };
    return contacts;
    // todo: Без поискового запроса контакты должны быть в алфавитном порядке
  }, [contacts, searchQuery]);

  return (
    <div>
      <Search/>

      {
        preparedContactArray.length
          ?
          <>
            <ContactListWrapper>
              {
                preparedContactArray.map(contact => (
                  <ContactItem
                    key={ contact.id }
                    contactId={ contact.id }
                    contactName={ `${ contact.name }` }
                    isOnline={ true }
                    avatarUrl={ contact.avatarUrl }
                    contactStatus={ contact.status }
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
