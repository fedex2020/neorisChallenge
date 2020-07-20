import React, {  useState,useEffect,useContext } from 'react';
import Card from '@material-ui/core/Card';
import DataTable from 'react-data-table-component';

import { useDispatch, useSelector } from 'react-redux'
import { listFeriados, actualizarFeriado, 
        borrarFeriado,borrarFeriadoEnStore,actualizarFeriadoEnStore,
        feriadosAsListaSelector} from '../store/slices/feriadoSlice'

import Modal from "./Modal"

import { LoadingContext } from "./common/LoadingProvider";

const columns =   [
  {
    name: 'Dia',
    selector: 'dia'
  },
  {
    name: 'Mes',
    selector: 'mes',
  },
  {
    name: 'Motivo',
    selector: 'motivo'
  }
]
const paginationOptions = { 
  rowsPerPageText: 'Filas por página', 
  rangeSeparatorText: 'de', 
  selectAllRowsItem: true, 
  selectAllRowsItemText: 'Todos' 
};

export default () => {
  const [showLoading, setShowLoading] = useContext(LoadingContext);

  const [dataFecha, setDataFecha] = useState({open:false,fecha:{}});
  
  const handleSave = data => {
    setShowLoading(true)

    dispatch( actualizarFeriado(data) )
    .then( () => {
      
      dispatch( actualizarFeriadoEnStore(data) )

      setDataFecha({
        open: false
      })

      setShowLoading(false)
    })
    .catch( e => alert(e))
    
  };

  const handleDelete = id => {
    setShowLoading(true)

    dispatch( borrarFeriado(id) )
    .then( () => {

      dispatch( borrarFeriadoEnStore(id) )

      setDataFecha({
        open: false
      })

      setShowLoading(false)

    })
    .catch( e => alert(e))
  };

  const handleCloseModal = () => {
    setDataFecha({
      open: false
    })
  };


  const dispatch = useDispatch()
  let feriados = useSelector(state => feriadosAsListaSelector(state.feriado))

  const filteredFeriados = feriados

  useEffect(() => {
     dispatch( listFeriados() )
  },[]);

  const handleRowClicked = row => {
    setDataFecha({
      fecha:{...row},
      open:true
    })
  }


  return(
    <Card style={{ height: '100%' }}>
        <DataTable
          title="Listado de feriados"
          columns={columns}
          data={filteredFeriados}
          highlightOnHover
          onRowClicked={handleRowClicked}
          pointerOnHover={true}
          pagination
          paginationComponentOptions={paginationOptions}
        />
        
        <Modal dataFecha={dataFecha} 
               handleClose={handleCloseModal} 
               handleSave={handleSave} 
               handleDelete={handleDelete} 
          />

    </Card>
  )
}