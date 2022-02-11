import React from 'react';
import styled from 'styled-components';

// Import Media

import LogotypeSource from '../../../media/images/logo.png';

const NavigationWrapper = styled.div`
        display:flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
        
        width: auto;
        height: 100%;
        padding: 22px 0;
        
        
        border-right: 1px solid #ECEEF5;
        
        img{
          width: 40px;
        }
    `

const Navigation = ({isOpened}) => {
    return (
        <NavigationWrapper>
            <img src={LogotypeSource} alt="Messenger Logotype"/>
        </NavigationWrapper>
    );
};

export default Navigation;