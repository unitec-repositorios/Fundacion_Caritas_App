import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../Recursos/logo_login.png';
import { message } from 'antd';
import '../../App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      check: true
    }
  }
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

  evaluate = () => {
    if ((this.state.email === 'Caritas' || this.state.email === 'caritas@honduras.com') && this.state.pass === 'caritas') {
      return true;
    }
    if ((this.state.email === 'Honduras' || this.state.email === 'honduras@caritas.com,') && this.state.pass === 'caritas') {
      return true;
    }
    this.setState({ check: false });
    return false;

  }
  handleChange = (event, input) => {
    this.setState({ [input]: event.target.value });
  }

  render() {
    return (
      <div className="contact-form">
        <img src={Logo} alt="Logo" className="avatar" />
        <TextField
          id="Username"
          label="Usuario"
          className="textField"
          onChange={(e) => this.handleChange(e, 'email')}
          margin="normal"
        />
        <br />
        <TextField
          id="Password"
          label="Contraseña"
          className="textField"
          onChange={(e) => this.handleChange(e, 'pass')}
          margin="normal"
          type='password'
        />
        <br />
          <Button
            color="secondary"
            variant="contained"
            style={{marginTop:"10%",marginLeft:'38%'}}
            onClick={this.handelLogin}
          >
            Entrar
            </Button>
      </div>
    );
  }
}

export default (Login);