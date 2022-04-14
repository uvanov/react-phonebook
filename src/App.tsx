/*
  TODO:
    Add states:
    - Search query
    - Selected contact
    - Is navigation opened
 */

// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { Navigation } from "./components/Layout/Navigation";
import { Sidebar } from "./components/Layout/Sidebar";
import { Content } from "./components/Layout/Content";

// Styled Components
const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 84px 1.1fr 2fr;
  height: 100%;
`

// Exports
export const App = () => {
  // const [contacts, setContacts] = useState(database);
  // const [selectedContactId, setSelectedContactId] = useState(0);
  // const selectedContact = useMemo(() => {
  //   let user = contacts.find(contact => contact.id === selectedContactId);
  //
  //   return user ? user : null;
  // }, [selectedContactId, contacts]);
  //
  // // @ts-ignore
  // const removeContactFunction = (contactId) => {
  //   let newContactArray = contacts.filter(contact => contact.id !== contactId);
  //   setContacts(newContactArray);
  // }

  return (
    <AppLayout>
      <Navigation isOpened={true}/>
      <Sidebar/>
      {/*<Content selectedContact={selectedContact} removeContactFunction={removeContactFunction}/>*/}
      {/*  Here place <Content/>, inside Content place <UserControls/> (aka header), <ContactInformation/> and <Chat/>  */}
    </AppLayout>
  );
};
