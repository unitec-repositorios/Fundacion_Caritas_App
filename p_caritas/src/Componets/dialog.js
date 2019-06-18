import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Input from "@material-ui/core/Input";
import InputLabel from '@material-ui/core/InputLabel';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
let Obj=null;
class FullScreenDialog extends Component   {
  constructor(props) {
    super(props)
  
    this.state = {
       Nombre:'',
       Edad:0,
       Genero:'',
       Estado:'',
       Oficio:''
    }
  }
  

    openDialog = e => {
        e.preventDefault();
        this.props.handleClickOpen();
      };  
      
      CloseDialog = e => {
        e.preventDefault();
        console.log('close');
        this.props.handleClose();
      };  
componentDidMount=(e)=>{
  console.log(this.props);
  this.setState({Nombre:this.props.vals.selectedRow[0].Nombre});
  this.setState({Edad:this.props.vals.selectedRow[0].Edad});
  this.setState({Oficio:this.props.vals.selectedRow[0].Oficio});
  this.setState({Genero:this.props.vals.selectedRow[0].Genero});
  this.setState({Estado:this.props.vals.selectedRow[0].Estado});
  console.log(this.state.Nombre);
}
render(){
    const {vals}=this.props;
   console.log(this.state.Nombre);
  return (
    <div>
    
      <Dialog fullScreen open={vals.open} onClose={this.CloseDialog} TransitionComponent={Transition}>
        <AppBar style={{position: 'relative',}}color="secondary">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.CloseDialog} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={{ marginLeft:"2em",flex: 1,}}color="inherit">
              Informacion de Paciente 
            </Typography>  
          </Toolbar>
        </AppBar>
        <List>
        <ListItem >
          <h2>Valor Antiguo</h2>  =  <h2>Nuevo Valor</h2>
          </ListItem>
          <ListItem >
          <Input disableUnderline disabled fullWidth defaultValue={this.state.Nombre} /> =<Input disableUnderline fullWidth defaultValue={this.state.Nombre} /> 
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
}

export default FullScreenDialog;