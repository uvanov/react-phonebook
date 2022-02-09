import React from 'react';
import styled from 'styled-components';


const IconButton = ({size, Icon}) => {

    const BUTTON_SIZE_PADDING = {
        small: 9,
        medium: 11,
        large: 12
    }

    const Button = styled.button`
        display:flex;
        justify-content:center;
        align-items:center;
        padding: ${BUTTON_SIZE_PADDING[size]}px;
        
        outline: 0;
        border: 1px solid #ECEEF5;
        background-color: white;
        border-radius: 10px;
        
        cursor: pointer;
        
        &:hover{
            background: linear-gradient(0deg, rgba(77, 76, 172, 0.1), rgba(77, 76, 172, 0.1)), #FFFFFF;
            * {
              fill: #6b59cc;
            }
        }
        
        &:active{
          transform: scale(.95);
        }
    `

    return (
        <Button>
            <Icon/>
        </Button>
    );
};

export default IconButton;