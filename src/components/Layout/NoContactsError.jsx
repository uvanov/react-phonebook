// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { LargeTitle } from '../UI';
import { useAppSelector } from '../../hooks/redux';

// Styled Components
const NoContactsErrorWrapper = styled.div`
    margin-top: 30px;
`;

export const NoContactsError = () => {

  const searchQuery = useAppSelector(state => state.search.query);

  return (
    <NoContactsErrorWrapper>
      <LargeTitle text={ searchQuery ?
        `I can't find "${ searchQuery }" in  your contact list` :
        `I can't find any contacts ;(`
      }/>
    </NoContactsErrorWrapper>
  );
};

