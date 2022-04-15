/*
  TODO:
    Add states:
    - Selected contact
 */

// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { Navigation } from "./components/Layout/Navigation";
import { Sidebar } from "./components/Layout/Sidebar";
import { Content } from "./components/Layout/Content";
import { useAppSelector } from "./hooks/redux";

// Styled Components
const AppLayout = styled.div<{ openNavigation: boolean }>`
  display: grid;
  grid-template-columns: ${({ openNavigation }) => openNavigation ? "84px 1.1fr 2fr" : "0 1.1fr 2fr"};
  height: 100%;
`

// Exports
export const App = () => {

  const isNavigationOpened = useAppSelector(state => state.navigation.isOpened);

  return (
    <AppLayout openNavigation={ isNavigationOpened }>
      <Navigation/>
      <Sidebar/>
      <Content/>
    </AppLayout>
  );
};
