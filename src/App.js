import React, { Component } from "react";
import Login from "./Componets/Login/Login";
import Appbar from "./Componets/appBar/appBar";
import Index from "./Componets/index";
import "./App.css";
import Mayre from "mayre";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const port = "http://localhost:3001";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      value: 0,
      token: "",
      user: "",
      password: "",
      rol: ""
    };
  }

  handleChangeValue = (event, newValue) => {
    this.setState({ value: newValue });
  };

  handelLogin = login => {
    this.setState({ login });
  };

  handleUser = loggedUser => {
    this.setState({
      token: loggedUser.token,
      user: loggedUser.user,
      password: loggedUser.contraseña,
      rol: loggedUser.rol
    });
    console.log("Hola soy el usuario " + loggedUser.user);
    localStorage.setItem("token", this.state.token);
    localStorage.setItem("rol", this.state.rol);
    localStorage.setItem("user", this.state.user);
  };

  logins() {
    if (this.state.token && !this.state.login) this.handelLogin(true);
    return this.state.login || this.state.token;
  }

  logout = () => {
    this.handelLogin(false);
    this.setState({ token: "" });
    localStorage.clear();
  };

  componentWillMount() {
    this.setState({
      token: localStorage.getItem("token"),
      rol: localStorage.getItem("rol")
    });
  }

  render() {
    if (this.state.rol != "") {
      return (
        <div>
          <Mayre
            of={
              <Appbar
                handleChangeValue={this.handleChangeValue}
                values={this.state.value}
                logout={this.logout}
                login={this.state.login}
                rol={this.state.rol}
                handleUser={this.handleUser}
              />
            }
            when={() => this.logins()}
          />

          <Mayre
            of={
              <div style={{ padding: "20px", marginTop: "30px" }}>
                <Index values={this.state.value} rol={this.state.rol} />
              </div>
            }
            or={
              <Login
                handelLogin={this.handelLogin}
                login={this.state.login}
                handleUser={this.handleUser}
              />
            }
            when={() => this.logins()}
          />
        </div>
      );
    } else {
      return <div>cargando</div>;
    }
  }
}

export default App;
