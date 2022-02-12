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

const Content = ({selectedContact}) => {
    return (
        <div>
            <UserControls/>

            <ContentInnerWrapper>
                <ContactInformation
                    selectedContact={selectedContact}
                />
            </ContentInnerWrapper>
        </div>
    );
};

export default Content;