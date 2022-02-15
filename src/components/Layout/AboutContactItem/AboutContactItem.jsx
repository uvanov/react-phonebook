import React from 'react';
import styled from "styled-components";

// Styled Components

const Title = styled.span`
    font-size: 15px;
    color: #8083A3;
    text-transform: capitalize;
    text-align: right;
`

const Children = styled.div`
    font-size: 15px;
    color: #1A1C1D;
`

const AboutContactItem = ({title, children}) => {
    return (
        <>
            <Title>{title}</Title>
            <Children>{children}</Children>
        </>
    );
};

export default AboutContactItem;