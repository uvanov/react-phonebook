// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Subtitle,
  Input
} from '../UI';

// Styled Components
const SearchWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap: 20px;
`

export const Search = ({ setSearchQueryState }) => {

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

