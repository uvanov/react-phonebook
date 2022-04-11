import React from 'react';
import styled from 'styled-components';


const LargeTitleWrapper = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: #1A1C1D;
`


const LargeTitle = ({text}) => {
    return (
        <LargeTitleWrapper>
            {text}
        </LargeTitleWrapper>
    );
};

export default LargeTitle;