
import React, { createContext, useState } from 'react';
import styled  from 'styled-components'
import {rotate} from "./KeyFramesAnimation"

const LoadingContext = createContext( [{}, () => {}] );


const LaNacionBoxDiv = styled.div`
  display: ${props => props.showSurface ? "flex" : "none"} ;
  align-items: center;
  justify-content: center;
  height:100vh ;
  width: 100vw ;
  z-index:3000;
  background-color: rgba(0,0,0,0.4);
  position: fixed ;
`

const LaNacionDiv = styled.div`
  animation: ${rotate} 1s infinite; 
  position:relative;
  width:100%;
  text-align:center;

  &:before {
    position:absolute;
    content: "Procesando !!!";
    font-weight: bold;
    font-size: 50px;
    color: #006998;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
`

const LoadingProvider = ({ children }) => {

  const [showLoading, setShowLoading] = useState(false);
  
  return (
      <LoadingContext.Provider value={[showLoading, setShowLoading]}>
        
        <LaNacionBoxDiv showSurface={showLoading}>
            <LaNacionDiv > </LaNacionDiv>
        </LaNacionBoxDiv> 

        {children}

      </LoadingContext.Provider>
    );
};

export { LoadingContext, LoadingProvider };
