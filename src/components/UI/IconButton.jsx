// Import modules
import React from 'react';
import styled from '@emotion/styled';

const BUTTON_SIZE = {
  small: 36,
  medium: 40,
  large: 42
}

// Styled Components
const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
        
  height: ${({ size }) => BUTTON_SIZE[size]}px;
  width: ${({ size }) => BUTTON_SIZE[size]}px;
        
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

// Exports
export const IconButton = ({ size, Icon, onClickHandler }) => (
  <Button
    size={ size }
    onClick={ onClickHandler }
  >
    <Icon/>
  </Button>
);
