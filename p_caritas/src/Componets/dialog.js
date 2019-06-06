import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class FullScreenDialog extends Component   {
    openDialog = e => {
        e.preventDefault();
        this.props.handleClickOpen();
      };  
      CloseDialog = e => {
        e.preventDefault();
        console.log('close');
        this.props.handleClose();
      };  
render(){
    const {vals}=this.props;
  return (
    <div>
    
      <Dialog fullScreen open={vals} onClose={this.CloseDialog} TransitionComponent={Transition}>
        <AppBar style={{position: 'relative',}}color="secondary">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.CloseDialog} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={{ marginLeft:"2em",flex: 1,}}color="inherit">
              Informacion de Paciente 
            </Typography>  
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
}

export default FullScreenDialog;