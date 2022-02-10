import React from 'react';
import styled from 'styled-components';

// Assets Import

import {ReactComponent as SearchIcon} from "../../../media/icons/search.svg";

// Styled Components

const InputWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    position:relative;
    
    border: 1px solid #ECEEF5;
    
    &:hover{
      border-color: #dbdde3;
    }
`
const InputField = styled.input`
    font-size: 16px;
    
    outline: 0;
    border: 0;
    
    padding: 10px;
    
    width: 100%;
 
`
const InputIconWrapper = styled.div`
    position:absolute;
    right: 10px;
    top: 50%;
    
    transform: translateY(-50%);
`

const Input = ({placeholder, onChange}) => {
    return (
        <InputWrapper>
            <InputField onChange={onChange} placeholder={placeholder} type="text"/>
            <InputIconWrapper>
                <SearchIcon/>
            </InputIconWrapper>
        </InputWrapper>
    );
};

export default Input;