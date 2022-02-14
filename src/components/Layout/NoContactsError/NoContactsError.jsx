import React from 'react';
import LargeTitle from "../../UI/LargeTitle/LargeTitle";
import styled from "styled-components";

const NoContactsErrorWrapper = styled.div`
    margin-top: 30px;
`


const NoContactsError = ({searchQuery}) => {
    return (
        <NoContactsErrorWrapper>
            <LargeTitle text={searchQuery ?
                `I can't find "${searchQuery}" in  your contact list` :
                `I can't find any contacts ;(`
            }/>
        </NoContactsErrorWrapper>
    );
};

export default NoContactsError;