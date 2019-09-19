import React from 'react';
import { Button } from 'antd';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import logo from '../Recursos/logo_login.png';
import { message } from 'antd';
import Axios from 'axios';

const port = 'http://localhost:3001';

class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      email: '',
      pass: '',
      userData: ' ',
      isLoading: false,
    };
  }


  evaluate = () => {
    if ((this.state.email === 'admin' || this.state.email === 'caritas@honduras.com') && this.state.pass === 'caritas') {
      return true;
    }
    if ((this.state.email === 'caritas' || this.state.email === 'honduras@caritas.com,') && this.state.pass === 'caritas') {
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
    this.setState({ isLoading: true });
    if (this.evaluate()) {
      this.props.handelLogin(true)
      this.props.handleUser(this.state.email, this.state.pass);
      message.success('Acceso Correcto! Bienvenido');
      localStorage.setItem('token', 'vadsasf');
      this.setState({ isLoading: false });
    } else {
      message.error('Accesso denegado, Verifique su usario o contraseña');
      this.setState({ isLoading: false });
      this.props.handelLogin(false);
    }
  }
  //"#ff8a80"
  render() {

    return (
      <div >
        <Dialog open style={{ background: "#F5F5F5" }}>
          <DialogContent style={{ background: "#e57373" }}>
            <DialogContentText>
              <img src={logo} width="100%" alt="logo" />
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="email"
              onChange={this.handleChange}
              type="email"
              placeholder="Usuario"
              value={this.state.email}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="pass"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
              type="Password"
              placeholder="Contraseña"
              fullWidth
            />
          </DialogContent>


            <Button onClick={this.handelLogin} loading={this.state.isLoading} type="default">
              Login
              </Button>

        </Dialog>

      </div>
    );
  }
}


export default (FormDialog);