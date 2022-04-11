// Import modules
import React from 'react';
import styled from "styled-components";

// Local modules
import ContactInformation from "@layout/ContactInformation";
import UserControls from "@layout/UserControls";

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