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
    Nombre:"Roberto",Apellido:"Rodriguez",Violencia:"Fisica",Remision:"JEVP", open:false
  }
}
handelonClick=(input,value)=>{
this.setState({[input]:[value]});
console.log(value);
}
handleClickOpen = () => {
    this.setState({ open: true });
    console.log(this.state.open);
};
handleClose = () => {
    this.setState({ open: false });
  };

printList=(number)=>{
  const NOMBRES=['JOSE','LUIS','DAVID'];
let list=[];
  for(let i=0;i<=2;i++){
  list.push(<List style={{ width: '100%',maxWidth: 360}}>
      <ListItem button  onClick={(e)=>this.handelonClick("Nombre",NOMBRES[i])} >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={NOMBRES[i]} secondary="Jan 9, 2014" onClick={this.handleClickOpen}/>
      </ListItem>
  </List>)
  }
      return list;
}
    render() {
      const {open,Nombre}=this.state;
      const vals={open,Nombre};
      
        return (
            <div>
              <Dialog handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} vals={vals}/>
              {this.printList()}
            </div>
        )
    }
}

export default PacientList

