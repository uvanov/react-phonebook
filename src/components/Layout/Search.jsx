// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Subtitle,
  Input
} from '../UI';
import { useAppDispatch } from "../../hooks/redux";
import { searchSlice } from "../../store/slices/SearchSlice";

// Styled Components
const SearchWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap: 20px;
`

export const Search = () => {

  const dispatch = useAppDispatch();
  const { setSearchQuery } = searchSlice.actions;

  const changeHandler = (event) => {
    dispatch(setSearchQuery({ query: event.target.value }));
  };

  return (
    <SearchWrapper>
      <Subtitle text={ "Search for a contact" }/>
      <Input
        placeholder={ "Contact name..." }
        onChange={ changeHandler }
      />
    </SearchWrapper>
  );
};

