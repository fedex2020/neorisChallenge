import React from 'react';
import {LoadingProvider} from './components/common/LoadingProvider';

import './App.css';
import NavBar from "./components/NavBar"

import Table from "./components/Table"

import styled from 'styled-components';

const MainBox = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top:56px;
  
  @media (min-width: 600px) {
    padding-top:64px;
  }
`;

const TableBox = styled.section`
  width: 90%;
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 992px) {
    width: 700px;
  }

`;

function App() {
  
  return (
    <LoadingProvider>
      
      <MainBox>
        
        <NavBar />

        <TableBox>
          <Table />
        </TableBox>      
        
      </MainBox>

    </LoadingProvider>
  );
}

export default App;
