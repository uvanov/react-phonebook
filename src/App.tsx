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
import {Navigation} from "./components/Layout/Navigation";
import {Sidebar} from "./components/Layout/Sidebar";
import {Content} from "./components/Layout/Content";
import {useAppSelector} from "./hooks/redux";

// Styled Components
const AppLayout = styled.div<{ openNavigation: boolean }>`
  display: grid;
  grid-template-columns: ${({ openNavigation }) => openNavigation ? "84px 1.1fr 2fr" : "0 1.1fr 2fr"};
  height: 100%;
`

// Exports
export const App = () => {

  const isNavigationOpened = useAppSelector(state => state.navigation.isOpened);
  // const [selectedContactId, setSelectedContactId] = useState(0);
  // const selectedContact = useMemo(() => {
  //   let user = contacts.find(contact => contact.id === selectedContactId);
  //
  //   return user ? user : null;
  // }, [selectedContactId, contacts]);
  //

  return (
    <AppLayout openNavigation={ isNavigationOpened }>
      <Navigation/>
      <Sidebar/>
      {/*<Content selectedContact={selectedContact} removeContactFunction={removeContactFunction}/>*/}
      {/*  Here place <Content/>, inside Content place <UserControls/> (aka header), <ContactInformation/> and <Chat/>  */}
    </AppLayout>
  );
};
