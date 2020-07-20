import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import { DatePicker ,MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'; // choose your lib


const styles = theme => ({
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)(props => {
const { children, classes, onClose, ...other } = props;
return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
    <Typography variant="h6">{children}</Typography>
    {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
        </IconButton>
    ) : null}
    </MuiDialogTitle>
);
});

const diccionarMes = {
  0:"enero",
  1:"febrero",
  2:"marzo",
  3:"abril",
  4:"mayo",
  5:"junio",
  6:"julio",
  7:"agosto",
  8:"septiembre",
  9:"octubre",
  10:"noviembre",
  11:"diciembre"
}

export default function FormDialog(props) {
  const [modalFecha, setDataFecha] = useState({});

  let { open = false,fecha ={} } = props.dataFecha
 
  let {info} = fecha

  const guardar = () => {
    let {nroMes} = getFecha()

    fecha.mes = diccionarMes[nroMes]

    props.handleSave(  { ...fecha, ...getFecha()}  )
  }

  const borrar = () => {
    props.handleDelete(  fecha.id[0]  )
  }


  const handleDate = e => {
    let date = new Date(e)
    
    modalFecha["dia"] = date.getDate()
    modalFecha["nroMes"] = date.getMonth()

    
    setDataFecha({
        ...modalFecha
    })

    console.log( modalFecha)

  }

  const handleClose = () =>{
    setDataFecha({})
    props.handleClose()
  }

  const handleOnChange = (e) => {
    let { name, value } = e.target

    modalFecha[name] = value

    setDataFecha({
        ...modalFecha
    })
   }

  const getFecha = () =>{
    let dia = modalFecha.dia ? modalFecha.dia : fecha.dia
    let mes = modalFecha.mes ? modalFecha.mes : fecha.mes
    let motivo = modalFecha.motivo ? modalFecha.motivo : fecha.motivo
    let tipo = modalFecha.tipo ? modalFecha.tipo : fecha.tipo
    let nroMes = modalFecha.nroMes ? modalFecha.nroMes : fecha.nroMes
  
    return {dia,mes,motivo,tipo,nroMes}
  } 

  const getDate = () =>{
    let dia = modalFecha.dia ? modalFecha.dia : fecha.dia
    let nroMes = modalFecha.nroMes ? modalFecha.nroMes : fecha.nroMes
        
    return new Date(2020,nroMes,dia)
  } 

  let {dia,mes,motivo,tipo,nroMes} = getFecha()

  let date = getDate()

  return (
    <div>
      <Dialog open={open}  aria-labelledby="form-dialog-title">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Datos feriado
        </DialogTitle>

        <DialogContent>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              orientation="landscape"
              variant="static"
              openTo="date"
              value={date}
              onChange={handleDate}
            />
          </MuiPickersUtilsProvider>
          
          <TextField
            margin="dense"
            id="motivo"
            name="motivo"
            label="Motivo"
            value={motivo}
            fullWidth
            onChange={handleOnChange}
          />
          <TextField
            margin="dense"
            id="tipo"
            name="tipo"
            label="Tipo"
            value={tipo}
            fullWidth
            onChange={handleOnChange}
          />
          <a target={"_blank"} href={info}>INFO</a>

        </DialogContent>

        <DialogActions>
          <Button onClick={guardar} color="primary">
            guardar
          </Button>
          <Button onClick={borrar} color="secondary">
            eliminar
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}