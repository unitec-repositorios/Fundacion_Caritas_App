import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Redirect } from 'react-router-dom';
import logo from './Recursos/caritas_logo.png';

class FormDialog extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        open: true,
        email:'',
        pass:'',
        redirect:false
      };
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect && this.evaluate()) {
      return <Redirect to='./Formulario' />
    }
  }

  evaluate=()=>{
      if((this.state.email==='Caritas'|| this.state.email==='caritas@honduras.com')&& this.state.pass==='caritas'){
        console.log('TODO BIEN');
        return true;
      }
      if((this.state.email==='Honduras'|| this.state.email==='honduras@caritas.com,')&& this.state.pass==='caritas'){
        console.log('TODO BIEN');
        return true;
      }
      console.log('Email '+this.state.email+' Pass '+this.state.pass);
      return false;
         
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  //"#ff8a80"
  render() {
    return (
      <div >
          {this.renderRedirect()}
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          PaperProps={{
            style: {backgroundColor: '#e63946', boxShadow: "none",
            overflow: "hidden"}
          }}
        >
          {/*<DialogTitle id="form-dialog-title" style={{ textAlign: 'center'}}>LOGIN</DialogTitle>*/}
          <DialogContent>
            <DialogContentText>
            <img src={logo} width="100%" alt="logo" />
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Usuario"
              name="email"
              onChange={this.handleChange}
              type="email"
              
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="pass"
              label="Contraseña"
              name="pass"
              onChange={this.handleChange}
              type="Password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.setRedirect} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


export default (FormDialog);