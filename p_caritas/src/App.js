import React, { Component } from 'react'
import Login from './Componets/Login/Login';
import Appbar from './Componets/appBar/appBar';
import Index from './Componets/index';
import './App.css';
import Mayre from 'mayre';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       login:false,
       value:0
    }
  }
  
  handleChangeValue=(event,newValue)=>{
  this.setState({value:newValue})
  }
  handelLogin=(login)=>{
    this.setState({login})
  }
  render() {
   
    return (
      <div className="App">
         <Appbar handleChangeValue={this.handleChangeValue} values={this.state.value}/>
          <Mayre
            of={<Index values={this.state.value}/>}
            or={<Login handelLogin={this.handelLogin} login={this.state.login}/>}
            when={this.state.login}
          />

      </div>

    )
  }
}

