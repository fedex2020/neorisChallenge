import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

import { useSelector } from 'react-redux'
import { cantidadFeriadosSelector } from '../store/slices/feriadoSlice'

const Toolbar = styled.section`
  width: 90%;
  height: 56px;
  display:flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 600px) {
    height: 64px;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 992px) {
    width: 700px;
  }
`;

export default () => {
    let feriados = useSelector( state => cantidadFeriadosSelector(state.feriado) )

    let texto = `Feriados: ${feriados}`

    if(feriados === 0) texto = null

    return(
        <AppBar position="absolute" style={{display:"flex",alignItems: "center"}}>
            <Toolbar>
                <Typography variant="h6" >
                    {texto}
                </Typography>
            </Toolbar>
        </AppBar>
    )    
}

