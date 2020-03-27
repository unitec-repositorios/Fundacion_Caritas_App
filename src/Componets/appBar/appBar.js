import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../Recursos/logo_nav_bar.jpeg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import "../../styles/dialogReport.css";
import Box from "@material-ui/core/Box";

class appBar extends Component {
  render() {
    const { values, rol } = this.props;
    if (rol === "Administrador") {
      return (
        <div>
          <AppBar
            id="Tabular"
            position="static"
            color="secondary"
            style={{ position: "fixed", top: 0, width: "100%" }}
          >
            <Toolbar variant="dense">
              <img src={logo} width="10%" alt="logo" />
              <Tabs value={values} onChange={this.props.handleChangeValue}>
                <Tab label="Formulario" />
                <Tab label="Estadisticas" />
                <Tab id="Pacientes" label="Pacientes" />
                <Tab id="Config" label="Configuracion" />
              </Tabs>
              <Box
                p={1}
                position="absolute"
                top={0}
                left="85%"
                zIndex="tooltip"
              >
                <Button color="inherit" onClick={this.props.logout}>
                  Cerrar Sesión
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </div>
      );
    } else {
      return (
        <div>
          <AppBar
            position="static"
            color="secondary"
            style={{ position: "fixed", top: 0, width: "100%" }}
          >
            <Toolbar variant="dense">
              <img src={logo} width="10%" alt="logo" />
              <Tabs value={values} onChange={this.props.handleChangeValue}>
                <Tab label="Formulario" />
                <Tab label="Estadisticas" />
                <Tab id="Pacientes" label="Pacientes" />
              </Tabs>
              <Box
                p={1}
                position="absolute"
                top={0}
                left="85%"
                zIndex="tooltip"
              >
                <Button color="inherit" onClick={this.props.logout}>
                  Cerrar Sesión
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
}

export default appBar;
