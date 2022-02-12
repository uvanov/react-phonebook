import React from 'react';
import styled from 'styled-components';

// Import Components

import IconButton from "../../UI/IconButton/IconButton"

// Import Media

import {ReactComponent as SearchIcon} from "../../../media/icons/search.svg";
import UserAvatarSource from "../../../media/images/avatar.jpg";

// Styled Components

const UserControlsWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap: 15px;
    padding: 22px 32px;
    border-bottom: 2px solid #ECEEF5;
`
const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &:hover{
      transform: rotate(360deg);
    }
`
const Separator = styled.div`
    width: 1px;
    height: 24px;
    background: #d2d2db;
`

const UserControls = () => {
    return (
        <UserControlsWrapper>
            <IconButton
                size={"medium"}
                Icon={SearchIcon}
                onClickHandler={() => { console.log("Click to Search Button") }}
            />

            <Separator/>

            <UserAvatar src={UserAvatarSource}/>

        </UserControlsWrapper>
    );
};

export default UserControls;