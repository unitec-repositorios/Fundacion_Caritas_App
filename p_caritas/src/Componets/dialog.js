import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
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
import Fab from '@material-ui/core/Fab';
import UpdateIcon from '@material-ui/icons/Update';
import Delete from '@material-ui/icons/Delete';
import axios from 'axios';


// const url = 'http://localhost:3000/api/paciente/';
const url = 'https://apicaritas.herokuapp.com/api/paciente/';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
let Obj=null;
class FullScreenDialog extends Component   {
  constructor(props) {
    super(props)
    this.state = {
      Id: 0,
      Update:{ Nombre:'',
      Edad:0,
      Genero:'',
      Estado:'',
      Oficio:''},
      extraData: []
    }
  }
  
  UpdateFunc=()=>{
    console.log(this.props);
    this.setState(prevState=> ({Update:{...prevState.Update,Nombre:this.state.Nombre}}));
    this.setState(prevState=> ({Update:{...prevState.Update,Edad:this.state.Edad}}));
    this.setState(prevState=> ({Update:{...prevState.Update,Oficio:this.state.Oficio}}));
    this.setState(prevState=> ({Update:{...prevState.Update,Genero:this.state.Genero}}));
    this.setState(prevState=> ({Update:{...prevState.Update,Estado:this.state.Estado}}));
  
    axios.put(url + this.state.Id + '/'+ this.state.Nombre + '/'+ this.state.Edad + '/'
              + this.state.Genero + '/'+ this.state.Estado + '/'+ this.state.Oficio
              + '/' + this.state.extraData.IdEdu + '/' + this.state.extraData.IdMun
              +'/' + this.state.extraData.IdTera + '/' + this.state.extraData.IdEO,{}
      ).then(res => console.log(res.data));
    this.CloseDialog();
  }

  deleteFunc=()=>{
    axios.delete(`https://apicaritas.herokuapp.com/api/paciente/${this.state.Id}`)
    .then(res => console.log(res.data));

    if (window.confirm("¿Está seguro que desea eliminar a " + this.state.Nombre + "?")){
      this.CloseDialog();
    }
    
  }


  handleChange = (event,input) => {
    this.setState({ [input]: event.target.value });
    
  };
    openDialog = e => {
        
        this.props.handleClickOpen();
      };  
      
      CloseDialog = e => {
        
        console.log('close');
        this.props.handleClose();
      };  
componentDidMount=(e)=>{
  // console.log( "Propiedades: " + this.props);
  
  this.setState({Id: this.props.vals.selectedRow[0].Id});
  this.setState({Nombre:this.props.vals.selectedRow[0].Nombre});
  this.setState({Edad:this.props.vals.selectedRow[0].Edad});
  this.setState({Oficio:this.props.vals.selectedRow[0].Oficio});
  this.setState({Genero:this.props.vals.selectedRow[0].Genero});
  this.setState({Estado:this.props.vals.selectedRow[0].Estado});
  console.log("el id seleccionado es: "+this.props.vals.selectedRow[0].Id);

  fetch('https://apicaritas.herokuapp.com/api/paciente/personal/'+this.props.vals.selectedRow[0].Id)
    .then(res => res.json()).then(data =>
       this.setState({extraData: data}))
    .catch(function (error) {
          console.log(error);
    })
}
  
render(){
    const {vals}=this.props;

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
          <strong>Nombre:</strong>
          <Input autoFocus style={{marginLeft:'0.5%'}} fullWidth defaultValue={this.state.Nombre} onChange={(e)=>this.handleChange(e,'Nombre')}/>
          </ListItem>
          
          <Divider />
          <ListItem>
          <strong>Edad:</strong>
          <Input style={{marginLeft:'0.5%'}} fullWidth defaultValue={this.state.Edad} onChange={(e)=>this.handleChange(e,'Edad')} />
          </ListItem>
          <Divider />
          <ListItem >
          <strong>Oficio:</strong>
          <Input style={{marginLeft:'0.5%'}} fullWidth defaultValue={this.state.Oficio} onChange={(e)=>this.handleChange(e,'Oficio')} />
          </ListItem>
          <Divider />
          <ListItem >
          <strong>Genero:</strong>
          <Input style={{marginLeft:'0.5%'}} fullWidth defaultValue={this.state.Genero} onChange={(e)=>this.handleChange(e,'Genero')} />
          </ListItem>
          <Divider />
          <ListItem >
          <strong>Estado:</strong>
          <Input style={{marginLeft:'0.5%'}} fullWidth defaultValue={this.state.Estado} onChange={(e)=>this.handleChange(e,'Estado')} />
          </ListItem>
          <Divider />
        </List>

        <Fab color="primary" aria-label="Add" style={{margin:'1em',position: 'absolute',
          bottom:0,
          left:"90%"}} onClick={this.UpdateFunc}>
          <UpdateIcon />
        </Fab>  
        <Fab color="primary" aria-label="Add" style={{margin:'1em',position: 'absolute',
          bottom:0,
          left:"80%"}} onClick={this.deleteFunc}>
          <Delete />
        </Fab>  

      </Dialog>
    </div>
  );
}
}

export default FullScreenDialog;