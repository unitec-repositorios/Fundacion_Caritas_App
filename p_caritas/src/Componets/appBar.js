import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './Recursos/Caritas.jpg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

function DenseAppBar(props) {
  const { classes } = props;
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
        <img src={logo} width="10%" alt='logo'/>
          <Tabs value={value} onChange={handleChange}>
          <Tab label='Formulario' value={0} component={Link} to="./Formulario"/>
          <Tab label='Estadisticas' value={1} component={Link} to="./Estadisticas"/>
          <Tab label='Pacientes' value={2} component={Link} to="./Pacientes"/>
          <Tab label='Casos' value={3} component={Link} to="./Casos"/>
        </Tabs>
        </Toolbar>
      </AppBar>

 
    </div>
    
  
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);



