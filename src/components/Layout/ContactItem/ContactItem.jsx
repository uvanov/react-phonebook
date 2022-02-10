import React from 'react';
import styled from 'styled-components';

// TODO: Добавить алёрт о недоступности звонка

// Import Assets

import {ReactComponent as MessageIcon} from "../../../media/icons/message.svg";
import {ReactComponent as CallIcon} from "../../../media/icons/call.svg";
import {ReactComponent as RemoveIcon} from "../../../media/icons/remove.svg";
import IconButton from "../../UI/IconButton/IconButton";

// Styled Components

const ContactItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 36px 3fr 2fr;
    column-gap: 18px;
`
const ContactImageWrapper = styled.div`
    position:relative;
`
const ContactImage = styled.img`
      width: 100%;
      border-radius: 10px;
`
const ContactOnlineMarker = styled.div`
      width: 8px;
      height: 8px;
      background: ${props => (props.online ? "#28C345" : "#F6933E")};
      border: 3px solid white;
      border-radius: 100%;
      
      position:absolute;
      bottom: 0;
      right: -4px;
`
const ContactInformation = styled.div`
    display:flex;
    flex-direction: column;
    padding-top: 2px;
`
const ContactName = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: #1A1C1D;
`
const ContactStatus = styled.span`
    font-size: 14px;
    color: #8083A3;
`
const ContactButtons = styled.div`
        display:flex;
        justify-content:flex-end;
        gap: 6px;
`

const ContactItem = ({ id, avatarUrl, isOnline, name, status, messageContact, removeContact }) => {
    return (
        <div>
            <ContactItemWrapper>
                <ContactImageWrapper>
                    <ContactImage src={avatarUrl}/>
                    <ContactOnlineMarker online={isOnline}/>
                </ContactImageWrapper>
                <ContactInformation>
                    <ContactName>{name}</ContactName>
                    <ContactStatus>{status}</ContactStatus>
                </ContactInformation>
                <ContactButtons>
                    <IconButton size={'medium'} Icon={MessageIcon}/>
                    <IconButton size={'medium'} Icon={CallIcon}/>
                    <IconButton size={'medium'} Icon={RemoveIcon} onClickHandler={() => removeContact(id)}/>
                </ContactButtons>
            </ContactItemWrapper>
        </div>
    );
};

export default ContactItem;