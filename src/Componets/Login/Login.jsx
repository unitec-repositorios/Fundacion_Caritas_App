import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import logo from '../Recursos/logo_login.png';
import { message } from 'antd';
class FormDialog extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        open: true,
        email:'',
        pass:'',
      
      };
  }

  evaluate=()=>{
      if((this.state.email==='Caritas'|| this.state.email==='caritas@honduras.com')&& this.state.pass==='caritas'){
        return true;
      }
      if((this.state.email==='Honduras'|| this.state.email==='honduras@caritas.com,')&& this.state.pass==='caritas'){
        return true;
      }
      return false;
         
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handelLogin = () => {
    if (this.evaluate()) {
      this.props.handelLogin(true)
      message.success('Acceso Correcto! Bienvenido');
      localStorage.setItem('token', 'vadsasf');
    } else {
      this.props.handelLogin(false);
      message.error('Accesso denegado, Verifique su usario o contraseña');
    }
  }
  //"#ff8a80"
  render() {
    
    return (
      <div >
      <Dialog open={true} style={{background:"Red"}}>    
          <DialogContent style={{background:"Red"}}>
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
              value={this.state.email}
              
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="pass"
              label="Contraseña"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
              type="Password"
              fullWidth
            />
          </DialogContent>
          <DialogActions style={{background:"Red"}}>
            <Button onClick={this.handelLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
        
      </div>
    );
  }
}


export default (FormDialog);