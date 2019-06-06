import React, { Component } from 'react'
import Dialog from './dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/PeopleSharp';



class PacientList extends Component {
constructor(props) {
  super(props)
  this.state = {
    Paciente:[{Nombre:"Roberto",Apellido:"Rodriguez",Violencia:"Fisica",Remision:"JEVP"}],
    open:false
  }
}

handleClickOpen = () => {
    this.setState({ open: true });
    console.log(this.state.open);
};
handleClose = () => {
    this.setState({ open: false });
  };
    render() {
      const {open}=this.state;
      const vals=open;
        return (
            <div>
              <Dialog handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} vals={vals}/>
                <List style={{ width: '100%',maxWidth: 360,}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Gustavo" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem button="true">
        <ListItemAvatar>
        <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Daniel" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem button="true">
        <ListItemAvatar>
        <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Roberto"  secondary="July 20, 2014" onClick={this.handleClickOpen} />
      </ListItem>
    </List>
            </div>
        )
    }
}

export default PacientList

