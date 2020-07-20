import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

import FeriadosClient from "../../services/FeriadosClient"

const ordenar = (a,b) =>{
  if(a.nroMes === b.nroMes){
    if (a.dia > b.dia) {
      return 1;
    }
    if (a.dia < b.dia) {
      return -1;
    }
    return 0
  }else{
    if (a.nroMes > b.nroMes) {
      return 1;
    }
    if (a.nroMes < b.nroMes) {
      return -1;
    }
    return 0
  }
}
//SELECTORS
const feriadosSelector = state => state.feriados

export const cantidadFeriadosSelector = createSelector(
  feriadosSelector,
  feriados => Object.keys(feriados).length
)

export const feriadosAsListaSelector = createSelector(
  feriadosSelector,
  feriados => Object.keys(feriados)
                    .reduce((acc, key) =>{  acc.push(feriados[key]); return acc }, [])
                    .sort( ordenar )
)

//THUNKS
export const listFeriados = createAsyncThunk(
  'feriados/listar',
  async (userId, thunkAPI) => {

    let feriados = await FeriadosClient.getFeriados()

   feriados = feriados.reduce( (acum,current) => {
      acum[ current["id"][0] ] = current
      return acum
    },{})


    thunkAPI.dispatch( setFeriados(feriados) )

  }
)

export const actualizarFeriado = createAsyncThunk(
  'feriados/actualizar',
  async (feriado, thunkAPI) => {

    return FeriadosClient.actualizarFeriados(feriado)
 
  }
)

export const borrarFeriado = createAsyncThunk(
  'feriados/borrar',
  async (id, thunkAPI) => {
    return FeriadosClient.borrarFeriado(id)
  }
)

let initialState = {
  org: 'rails',
  repo: 'rails',
  page: 1,
  displayType: 'issues',
  issueId: null,
  feriados:{}
}

const issuesDisplaySlice = createSlice({
  name: 'issuesDisplay',
  initialState,
  reducers: {

    setFeriados(state, action) {      
      state.feriados = action.payload
      
      console.log(state.feriados)
    },

    borrarFeriadoEnStore(state, action) {
      delete state.feriados[action.payload]
    },

    actualizarFeriadoEnStore(state, action) {
      let {payload} = action

      state.feriados[ payload.id[0] ] = payload
    }
  }
})

export const {
  setFeriados,
  borrarFeriadoEnStore,
  actualizarFeriadoEnStore 
} = issuesDisplaySlice.actions

export default issuesDisplaySlice.reducer
