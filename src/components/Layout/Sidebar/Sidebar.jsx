import React from 'react';
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

const CONTACTS = [
    {
        id: 1,
        name: 'Ruslan Balashov',
        avatarUrl: "https://sun9-10.userapi.com/s/v1/ig2/RL0Wx20a1skO0buTQeNRgSiq46Ujt92GyUNInixRSDmf5CFtHFf5k-Q67Za66MVzMJ8kg5d5EKfvj1tB73Py-YFD.jpg?size=50x50&quality=95&crop=26,0,2533,2533&ava=1",
        status: '3D Designer',
        email: 'reslan.balashov@gmail.com',
        isOnline: true,
        phone: '719234521',
        social: {
            facebook: 'https://facebook.com/ruslanbalashov',
            telegram: '@balashov',
            linkedin: 'https://linkedin.com/ruslanbalashov',
            google: 'https://google.com/ruslanbalashov'
        }
    },
    {
        id: 2,
        name: 'Alex Holodniy',
        avatarUrl: "https://sun9-40.userapi.com/s/v1/ig2/6iWzUVDiR3PrGSo6U2kFLxd_m4lJmpuNovcl7mjGzWM0W95jbQ9x_4o4w3Mrb33V7As4WGP6cjZPrZT1Uwp1DJ_G.jpg?size=50x50&quality=96&crop=132,237,933,933&ava=1",
        status: 'Python Developer',
        email: 'alex.holodniy@gmail.com',
        isOnline: false,
        phone: '219945521',
        social: {
            facebook: 'https://facebook.com/Holodniy',
            telegram: '@holodniy',
            linkedin: 'https://linkedin.com/Holodniy',
            google: 'https://google.com/Holodniy'
        }
    }
]

const Sidebar = ({opened}) => {

    return (
        <SidebarWrapper>
            <SidebarHeader>
                <IconButton size={"medium"} Icon={NavigationButton}/>
                <LargeTitle text={"Contacts"}/>
            </SidebarHeader>

            <ContactListWrapper>
                <ContactList contactsArray={CONTACTS}/>
            </ContactListWrapper>

        </SidebarWrapper>
    );
};

export default Sidebar;