import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import logo from "../Recursos/logo_login.png";
import Axios from "axios";

const port = "http://localhost:3001";
var loggedUser;

class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      user: "",
      pass: "",
      userData: {}
    };
  }

  componentDidMount = async () => {
    //localStorage.setItem('itemName', {})
    //  await this.fetchData();
  };

  fetchData = async () => {
    await Axios.post(port + "/api/signin", {
      username: this.state.user,
      password: this.state.pass
    })
      .then(res => {
        console.log(res.data);
        this.setState({ userData: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  login = async () => {
    await this.fetchData();
    console.log(this.state.userData);
    loggedUser = {
      token: this.state.userData.token,
      user: this.state.user,
      password: this.state.pass,
      rol: this.state.userData.rol
    };
    this.props.handelLogin(true);
    console.log("Hola soy el usuario " + loggedUser.user);
    this.props.handleUser(loggedUser);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //"#ff8a80"
  render() {
    return (
      <div>
        <Dialog open={true} style={{ background: "#F5F5F5" }}>
          <DialogContent style={{ background: "#e57373" }}>
            <DialogContentText>
              <img src={logo} width="100%" alt="logo" />
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="user"
              onChange={this.handleChange}
              type="text"
              placeholder="Usuario"
              value={this.state.user}
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
          <DialogActions
            style={{ background: "White", justifyContent: "Center" }}
          >
            <Button onClick={this.login} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;
