// Import modules
import React from 'react';
import styled from 'styled-components';

// Local modules
import IconButton from "@ui/IconButton";
import LargeTitle from "@ui/LargeTitle";
import ContactList from "@layout/ContactList";

// Assets
import { ReactComponent as NavigationButton } from "@media/icons/burger.svg";

// Styled Components
const SidebarWrapper = styled.div`
    background-color: #FAF9FF;
`
const SidebarHeader = styled.div`
    display:flex;
    align-items:center;
    gap: 15px;
    padding: 0 32px;
    height: 84px;
    box-sizing: border-box;
    border-bottom: 2px solid #ECEEF5;
`
const ContactListWrapper = styled.div`
    padding: 28px 32px 34px 32px;
    height: auto;
`

const Sidebar = ({contacts, setContacts, setSelectedContactId, removeContactFunction}) => {
    return (
        <SidebarWrapper>
            <SidebarHeader>
                <IconButton size={"medium"} Icon={NavigationButton}/>
                <LargeTitle text={"Contacts"}/>
            </SidebarHeader>

            <ContactListWrapper>
                <ContactList contacts={contacts} setContacts={setContacts} setSelectedContactId={setSelectedContactId} removeContactFunction={removeContactFunction}/>
            </ContactListWrapper>

        </SidebarWrapper>
    );
};

export default Sidebar;