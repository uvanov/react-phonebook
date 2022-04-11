// TODO: Install and configure eslint

// Import modules
import React, {useMemo, useState} from 'react';
import styled from '@emotion/styled';

// Local modules
import Navigation from "./components/layout/Navigation";
import { Sidebar } from "./components/layout/Sidebar";
import { Content } from "./components/layout/Content";
import database from './database.json';

// Styled Components
const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 84px 1.1fr 2fr;
  height: 100%;
`

// Exports
export const App = () => {
  const [contacts, setContacts] = useState(database);
  const [selectedContactId, setSelectedContactId] = useState(0);
  const selectedContact = useMemo(() => {
    let user = contacts.find(contact => contact.id === selectedContactId);

    return user ? user : null;
  }, [selectedContactId, contacts]);

  // @ts-ignore
  const removeContactFunction = (contactId) => {
    let newContactArray = contacts.filter(contact => contact.id !== contactId);
    setContacts(newContactArray);
  }

  return (
    <AppLayout>
      {/*<Navigation/>*/}
      <Sidebar contacts={contacts} setContacts={setContacts} setSelectedContactId={setSelectedContactId}
               removeContactFunction={removeContactFunction}/>
      <Content selectedContact={selectedContact} removeContactFunction={removeContactFunction}/>
      {/*  Here place <Content/>, inside Content place <UserControls/> (aka header), <ContactInformation/> and <Chat/>  */}
    </AppLayout>
  );
};
