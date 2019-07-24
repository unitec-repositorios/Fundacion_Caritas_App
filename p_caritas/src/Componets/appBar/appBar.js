import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../Recursos/Caritas.jpg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class appBar extends Component {
  
  render() {
    const {values} =this.props;
    return (
      <div>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
        <img src={logo} width="10%" alt='logo'/>
          <Tabs value={values} onChange={this.props.handleChangeValue}>
          <Tab label='Formulario' />
          <Tab label='Estadisticas'  />
          <Tab label='Pacientes'  />
          <Tab label='Casos'  />
        </Tabs>
        </Toolbar>
      </AppBar>

      </div>
    )
  }
}












