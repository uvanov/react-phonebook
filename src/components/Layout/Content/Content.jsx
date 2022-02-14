import React from 'react';
import styled from "styled-components";
import ContactInformation from "../ContactInformation/ContactInformation";

// Import Components
import UserControls from "../UserControls/UserControls";
import IconButton from "../../UI/IconButton/IconButton";

// Styled Components

const ContentInnerWrapper = styled.div`
    padding: 120px 60px;
    box-sizing: border-box;
`

const Content = ({selectedContact, removeContactFunction}) => {
    return (
        <div>
            <UserControls/>

            <ContentInnerWrapper>
                <ContactInformation
                    selectedContact={selectedContact}
                    removeContactFunction={removeContactFunction}
                />
            </ContentInnerWrapper>
        </div>
    );
};

export default Content;