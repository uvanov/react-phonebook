import React from 'react';
import styled from 'styled-components';

const SubtitleWrapper = styled.span`
    font-size: 14px;
    color: #8083A3;
`

const Subtitle = ({text}) => {
    return (
        <SubtitleWrapper>
            {text}
        </SubtitleWrapper>
    );
};

export default Subtitle;