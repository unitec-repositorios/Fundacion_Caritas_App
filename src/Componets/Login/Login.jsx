import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import logo from '../Recursos/logo_login.png';

const port = 'http://localhost:3001';

class FormDialog extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        open: true,
        email:'',
        pass:'',
        userData: ' '
      };
  }

  componentDidMount = async () => {
    await fetch(port + '/api/usuarios').then(res => res.json()).then(data => {
      this.setState({ userData: data })
    })
  }

  login = () => {
    if(this.evaluate()){
      this.props.handelLogin(true)
      this.props.handleUser(this.state.email, this.state.pass);
    }else{
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
            <Button onClick={this.login} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
        
      </div>
    );
  }
}


export default (FormDialog);