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

  componentDidMount = async () => {
    await this.fetchData();
  }

  fetchData = async ()  =>{
    await Axios.get(port + '/api/usuarios').then(res => {
      this.setState({ userData: res.data })
    }).catch(error =>{
      console.log(error);
    });
  }

  login = () => {
    if(this.evaluate()){
      this.props.handelLogin(true)
      this.props.handleUser(this.state.email, this.state.pass);
      message.success('Acceso Correcto! Bienvenido');
      localStorage.setItem('token', 'vadsasf');
      this.setState({ isLoading: false });
    }else{
      message.error('Accesso denegado, Verifique su usario o contraseña');
      this.setState({ isLoading: false });
      this.props.handelLogin(false);
    }
  }

  evaluate=()=>{
    var found = this.state.userData.map((item) => {
        if ( (this.state.email === item.usuario) && (this.state.pass === item.contraseña) )
          return true;
        return false;
      })
     
      found = found[0] || found[1]; //found recibe un arreglo de 2 posiciones del map, si ambos son false no encontro nada, con uno de los dos que sea verdadero significa que encontro match 
      console.log("valor de evaluate: ", found);
      return found;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

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


            <Button onClick={this.login} loading={this.state.isLoading} type="default">
              Login
              </Button>

        </Dialog>

      </div>
    );
  }
}


export default (FormDialog);