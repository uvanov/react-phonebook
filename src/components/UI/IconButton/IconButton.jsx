import React from 'react';
import styled from 'styled-components';


// Todo: Добавить обработчик кликов по кнопке

const BUTTON_SIZE = {
    small: 36,
    medium: 40,
    large: 42
}

const Button = styled.button`
        display:flex;
        justify-content:center;
        align-items:center;
        
        height: ${props => (BUTTON_SIZE[props.size])}px;
        width: ${props => (BUTTON_SIZE[props.size])}px;
        
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
    `

const IconButton = ({size, Icon}) => {

    return (
        <Button size={size}>
            <Icon/>
        </Button>
    );
};

export default IconButton;