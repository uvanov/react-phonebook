import React, {useState} from 'react';
import styled from 'styled-components';
import IconButton from "../../UI/IconButton/IconButton";

// Import Media

import { ReactComponent as NavigationButton } from "../../../media/icons/burger.svg";
import LargeTitle from "../../UI/LargeTitle/LargeTitle";
import ContactList from "../ContactList/ContactList";

// Styled Components

const SidebarWrapper = styled.div`
    background-color: #FAF9FF;
`
const SidebarHeader = styled.div`
    display:flex;
    align-items:center;
    gap: 15px;
    padding: 22px 32px;
    
    border-bottom: 2px solid #ECEEF5;
`
const ContactListWrapper = styled.div`
    padding: 28px 32px 34px 32px;
    height: auto;
`


// Constants




const Sidebar = ({contacts, setContacts, setSelectedContactId}) => {

    return (
        <SidebarWrapper>
            <SidebarHeader>
                <IconButton size={"medium"} Icon={NavigationButton}/>
                <LargeTitle text={"Contacts"}/>
            </SidebarHeader>

            <ContactListWrapper>
                <ContactList contacts={contacts} setContacts={setContacts} setSelectedContactId={setSelectedContactId}/>
            </ContactListWrapper>

        </SidebarWrapper>
    );
};

export default Sidebar;