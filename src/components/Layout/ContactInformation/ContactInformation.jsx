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



const ContactInformation = ({contactId, avatarUrl, contactName, contactStatus, contactInformationSections}) => {
    return (
        <div>
            <ContactInformationGrid>
                <Header>
                    <HeaderImage source={avatarUrl}/>
                    <HeaderInformation>
                        <LargeTitle text={contactName}/>
                        <Subtitle text={contactStatus}/>
                        <HeaderButtons>
                            <MessageButton/>
                            <IconButton size={"large"} Icon={CallIcon}/>
                            <IconButton size={"large"} Icon={RemoveIcon}/>
                        </HeaderButtons>
                    </HeaderInformation>
                </Header>

                {
                    contactInformationSections.map(informationSection => (
                        <AboutSection
                            title={informationSection.title}
                            template={informationSection.template}
                            inner={informationSection.inner}
                        />
                    ))
                }
            </ContactInformationGrid>
        </div>
    );
};

export default ContactInformation;