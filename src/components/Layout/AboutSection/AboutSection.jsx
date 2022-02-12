import React from 'react';
import styled from "styled-components";

// Styled Components

const SectionTitle = styled.div`
    font-size: 15px;
    color: #8083A3;
    font-weight: 600;
`

const SectionInner = styled.div`
    display:flex;
    gap: 6px;
    font-size: 15px;
    color: #1A1C1D;
    font-weight: 500;
`
const AboutSection = ({title, template, inner}) => {

    // Возвращать пустышку, а внутри два элемента, чтобы можно было построить грид

    return (
        <>
            <SectionTitle>{title}</SectionTitle>
            <SectionInner>{inner}</SectionInner>
        </>
    );
};

export default AboutSection;