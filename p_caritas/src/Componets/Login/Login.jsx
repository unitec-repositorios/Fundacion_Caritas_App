import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import Logo from '../Recursos/logo_login.png';
import {message} from 'antd';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginLeft:'30%',
    marginTop:'10vh',
    paddingBottom: theme.spacing(1),
    height: 'auto',
    width: 'auto',
    backgroundColor: '#ff8585'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10vh',
    backgroundColor: '#ff8585'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  button: {
    margin: theme.spacing(1),
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    color: 'white',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
});

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
    this.setState({check:false});
    return false;

  }
  handleChange = (event,input) => {
    this.setState({ [input]: event.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>

        <Paper className={classes.root}>
          <header>
            <img src={Logo} alt="Logo" />
          </header>
          <TextField
            id="Username"
            label="Usuario"
            className={classes.textField}
            onChange={(e) => this.handleChange(e,'email')}
            margin="normal"
          />
          <br />
          <TextField
            id="Password"
            label="Contraseña"
            className={classes.textField}
            onChange={(e) => this.handleChange(e,'pass')}
            margin="normal"
            type='password'
          />
          <br />
          <FormControl>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={this.handelLogin}
            >
              Entrar
                    </Button>
          </FormControl>

        </Paper>
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(Login);