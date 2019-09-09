import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../Recursos/logo_nav_bar.jpeg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';


class appBar extends Component {
  render() {
    const {values, user} =this.props;
    console.log("usuario appbar: ", user);
    if(user === 'admin'){
      return (
        <div>
        <AppBar position="static" color="secondary" style={{  position: "fixed", top: 0,  width: "100%"}}>
          <Toolbar variant="dense">
          <img src={logo} width="10%" alt='logo'/>
            <Tabs value={values} onChange={this.props.handleChangeValue}>
              <Tab label='Formulario' />
              <Tab label='Estadisticas'  />
              <Tab label='Pacientes'/>
              <Tab label='Casos'/>
              <Tab label = 'Configuracion'/>
            </Tabs>
            <Button color='inherit' onClick={this.props.logout}>Log Out</Button>
          </Toolbar>
        </AppBar>

        </div>
      )
    }else{
      return (
        <div>
        <AppBar position="static" color="secondary" style={{  position: "fixed", top: 0,  width: "100%"}}>
          <Toolbar variant="dense">
          <img src={logo} width="10%" alt='logo'/>
            <Tabs value={values} onChange={this.props.handleChangeValue}>
              <Tab label='Formulario' />
              <Tab label='Estadisticas'  />
            </Tabs>
            <Button color='inherit' onClick={this.props.logout}>Log Out</Button>
          </Toolbar>
        </AppBar>

        </div>
      )
    }
  }
}

export default appBar;





