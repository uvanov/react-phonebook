import React from 'react';
import styled from 'styled-components';

// Import media

import { ReactComponent as MessageIcon } from '../../../media/icons/message.svg';



const Button = styled.button`
    display:flex;
    align-items:center;
    gap: 6px;
    
    background: #6B59CC;
    border-radius: 10px;
    
    padding: 11px 17px;
    
    outline: 0;
    border: 0;
    
    color: white;
    font-weight: bold;
    font-size: 16px;
    
    cursor: pointer;
    
    * {
      fill: white;
    }
    
    &:hover{
      background: #50439f;
    }
`


const MessageButton = () => {
    return (
        <Button>
            <MessageIcon/>
            <span>Message</span>
        </Button>
    );
};

export default MessageButton;