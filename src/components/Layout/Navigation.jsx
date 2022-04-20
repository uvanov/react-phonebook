// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Assets
import LogotypeSource from '../../media/images/logo.png';

// Styled Components
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
`;

export const Navigation = () => (
  <NavigationWrapper>
    <img src={ LogotypeSource } alt="Messenger Logotype"/>
  </NavigationWrapper>
);

