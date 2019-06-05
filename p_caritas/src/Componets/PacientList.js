import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/PeopleSharp';

export class PacientList extends Component {
    render() {
        return (
            <div>
                <List style={{ width: '100%',maxWidth: 360,}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Gustavo" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
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
        <ListItemText primary="Roberto" secondary="July 20, 2014" />
      </ListItem>
    </List>
            </div>
        )
    }
}

export default PacientList

