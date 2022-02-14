import React from 'react';
import styled from 'styled-components';

// Import Components

import LargeTitle from "../../UI/LargeTitle/LargeTitle";
import Subtitle from "../../UI/Subtitle/Subtitle";
import MessageButton from "../../UI/MessageButton/MessageButton";
import IconButton from "../../UI/IconButton/IconButton";

// Import Media

import {ReactComponent as CallIcon} from "../../../media/icons/call.svg";
import {ReactComponent as RemoveIcon} from "../../../media/icons/remove.svg";
import AboutSection from "../AboutSection/AboutSection";

/*
    TODO: Components to create:
        - about-section
*/

let informationFormatExample = [
    {
        title: "Bio",
        template: "text",
        text: "Some fun text, which tells about myself"
    },
    {
        title: "Social",
        template: "children",
        children: "// Here we pass children (buttons) //"
    }
]


const Header = styled.div`
    display:flex;
    gap: 25px;
    
    grid-column: 2 / 3;
`
const HeaderImage = styled.div`
    
    width: 114px;
    height: 114px;
    border-radius: 26px;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("${props => props.source}");
`
const HeaderInformation = styled.div`
    display:flex;
    flex-direction: column;
`
const HeaderButtons = styled.div`
    display:flex;
    gap: 6px;
    
    margin-top: 21px;
`

const ContactInformationGrid = styled.div`
    display: grid;
    grid-template-columns: .5fr 5fr;
    row-gap: 25px;
`



const ContactInformation = ({selectedContact, removeContactFunction}) => {
    if(selectedContact === null){
        return (
            <h1>Need to select contact.</h1>
        )
    } else {
        return (
            <ContactInformationGrid>
                <Header>
                    <HeaderImage source={selectedContact.avatarUrl}/>
                    <HeaderInformation>
                        <LargeTitle text={selectedContact.name}/>
                        <Subtitle text={selectedContact.status}/>
                        <HeaderButtons>
                            <MessageButton/>
                            <IconButton size={"large"} Icon={CallIcon}/>
                            <IconButton size={"large"} Icon={RemoveIcon} onClickHandler={() => removeContactFunction(selectedContact.id)}/>
                        </HeaderButtons>
                    </HeaderInformation>
                </Header>
            </ContactInformationGrid>
        )
    }
};

export default ContactInformation;