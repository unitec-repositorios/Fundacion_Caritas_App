import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/PeopleSharp';
import Divider from '@material-ui/core/Divider';


class PacientList extends Component {
constructor(props) {
  super(props)
  this.state = {
    Paciente:[{Nombre:"Roberto",Apellido:"Rodriguez",Violencia:"Fisica",Remision:"JEVP"}],
    open:false
  }
}

handleClickOpen = () => {
    this.setState({ open: true });
    console.log(this.state.Paciente[0].Nombre);
};
  

  handleClose = () => {
    this.setState({ open: false });
  };
    render() {
        return (
            <div>
               <Dialog
          open={this.state.open}
          aria-labelledby="form-dialog-"
        >
          <DialogTitle id="form-dialog-">Informacion de Cliente</DialogTitle>
          <DialogContent>
              <strong>Nombre: </strong>{this.state.Paciente[0].Nombre} 
              <Divider/><br/>
              <strong>Apellido: </strong>{this.state.Paciente[0].Apellido} 
              <Divider/><br/>
              <strong>Nombre: </strong>{this.state.Paciente[0].Nombre} 
              <Divider/><br/>
              <strong>Apellido: </strong>{this.state.Paciente[0].Apellido} 
              <Divider/><br/>
              <strong>Nombre: </strong>{this.state.Paciente[0].Nombre} 
              <Divider/><br/>
              <strong>Apellido: </strong>{this.state.Paciente[0].Apellido} 
              <Divider/><br/>
              <strong>Nombre: </strong>{this.state.Paciente[0].Nombre} 
              <Divider/><br/>
              <strong>Apellido: </strong>{this.state.Paciente[0].Apellido} 
              <Divider/><br/>
              <strong>Nombre: </strong>{this.state.Paciente[0].Nombre} 
              <Divider/><br/>
              <strong>Apellido: </strong>{this.state.Paciente[0].Apellido} 
              <Divider/><br/>
              <strong>Nombre: </strong>{this.state.Paciente[0].Nombre} 
              <Divider/><br/>
              <strong>Apellido: </strong>{this.state.Paciente[0].Apellido} 
              <Divider/><br/>
              <strong>Nombre: </strong>{this.state.Paciente[0].Nombre} 
              <Divider/><br/>
              <strong>Apellido: </strong>{this.state.Paciente[0].Apellido} 
              <Divider/><br/>
              <strong>Nombre: </strong>{this.state.Paciente[0].Nombre} 
              <Divider/><br/>
              <strong>Apellido: </strong>{this.state.Paciente[0].Apellido} 
              <Divider/><br/>
              
              
          </DialogContent>
          <DialogActions>
            <Button  color="primary" onClick={this.handleClose}>
              Okay
            </Button>
            
          </DialogActions>
        </Dialog>


                <List style={{ width: '100%',maxWidth: 360,}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Gustavo" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem button="true">
        <ListItemAvatar>
        <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Daniel" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem button="true">
        <ListItemAvatar>
        <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Roberto" onClick={this.handleClickOpen} secondary="July 20, 2014" />
      </ListItem>
    </List>
            </div>
        )
    }
}

export default PacientList

