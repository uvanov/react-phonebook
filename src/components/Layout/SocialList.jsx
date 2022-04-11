import React from 'react';
import styled from "styled-components";

// Assets Imports

import {ReactComponent as FacebookIcon} from "../../../media/icons/fb.svg";
import {ReactComponent as TwitterIcon} from "../../../media/icons/twitter.svg";
import {ReactComponent as PinterestIcon} from "../../../media/icons/pinterest.svg";
import {ReactComponent as LinkedinIcon} from "../../../media/icons/linkedin.svg";
import {ReactComponent as GoogleIcon} from "../../../media/icons/google.svg";
import IconButton from "../../UI/IconButton/IconButton";

// Styled Components

const SocialListWrapper = styled.div`
    display:flex;
    gap: 6px;
`



// Constants

const ICONS = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    pinterest: PinterestIcon,
    linkedin: LinkedinIcon,
    google: GoogleIcon
}

const SocialList = ({socialLinks}) => {
    return (
        <SocialListWrapper>
            {
                Object.keys(socialLinks).map((key, index) => {
                    let link = socialLinks[key];

                    return (
                        <a href={link} target="_blank" rel="noreferrer" key={index} >
                            <IconButton Icon={ICONS[key]} size={"medium"}/>
                        </a>
                    )
                })
            }
        </SocialListWrapper>
    );
};

export default SocialList;