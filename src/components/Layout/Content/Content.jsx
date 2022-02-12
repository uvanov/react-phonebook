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

const Content = () => {
    return (
        <div>
            <UserControls/>

            <ContentInnerWrapper>
                <ContactInformation
                    contactId={5}
                    contactStatus={"Python Developer"}
                    contactName={"Alex Holodniy"}
                    avatarUrl={"https://sun9-40.userapi.com/s/v1/ig2/Ua_rQ8pYWG6h-IIeZ0SU1KWglykOMUlqrfBGesHMULBqzCLi4B8Ogae9DjPfSqUa05-tIO6qaWxil5_Kjf5sN_mT.jpg?size=200x266&quality=96&crop=0,0,1104,1472&ava=1"}
                    contactInformationSections={[
                        {
                            title: "Bio",
                            template: "text",
                            inner: "When I first got into the advertising, I was looking for the magical combination that would put website into the top search engine rankings"
                        },
                        {
                            title: "Email",
                            template: "text",
                            inner: "alex.holodok@gmail.com"
                        },
                        {
                            title: "Phone",
                            inner: "439-582-1578"
                        },
                        {
                            title: "Social",
                            template: "children",
                            inner: "// Here we pass children (buttons) //"
                        }
                    ]}
                />
            </ContentInnerWrapper>
        </div>
    );
};

export default Content;