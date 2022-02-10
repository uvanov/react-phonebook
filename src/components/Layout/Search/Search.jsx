import React from 'react';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Input from '../../UI/Input/Input';
import styled from 'styled-components';

const SearchWrapper = styled.div`
    display:flex;
    flex-direction: column;
    gap: 20px;
`

const Search = ({setSearchQueryState}) => {

    const changeHandler = (event) => {
        setSearchQueryState(event.target.value)
    }

    return (
        <SearchWrapper>
            <Subtitle text={"Search for a contact"}/>
            <Input placeholder={"Contact name..."} onChange={changeHandler}/>
        </SearchWrapper>
    );
};

export default Search;