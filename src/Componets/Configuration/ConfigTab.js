import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ConfigPacients from './ConfigPacients';
import ConfigCases from "./ConfigCases";
import ConfigUsuarios from "./ConfigUsuarios";
import { createMuiTheme } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
    <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '5%'
  },
}); 

const theme = createMuiTheme({});

class ConfigTab extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue })
  }

  handleChangeIndex = (index) =>  {
    this.setState({ value: index });
  }

  render(){
    return (
      <div className={useStyles.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab id="TabPacientes" label="Pacientes" {...a11yProps(0)} />
            <Tab id="TabCasos" label="Casos" {...a11yProps(1)} />
            <Tab id="TabUsuarios" label="Usuarios" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabPanel value={this.state.value} index={0} dir={theme.direction}>
            <ConfigPacients/>
          </TabPanel>
          <TabPanel value={this.state.value} index={1} dir={theme.direction}>
            <ConfigCases/>
          </TabPanel>
          <TabPanel value={this.state.value} index={2} dir={theme.direction}>
            <ConfigUsuarios/>
          </TabPanel>
        </SwipeableViews>
      </div>
    );
  }
}

export default ConfigTab;