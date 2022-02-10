import React, {useEffect, useState} from 'react';
import Navigation from "./components/Layout/Navigation/Navigation";
import styled from 'styled-components';
import Sidebar from "./components/Layout/Sidebar/Sidebar";


const AppLayout = styled.div`
        display: grid;
        grid-template-columns: 84px 1.1fr 2fr;
        height: 100%;
`

const App = () => {
    return (
        <AppLayout>
            <Navigation/>
            <Sidebar/>
        </AppLayout>
    );
};

export default App;