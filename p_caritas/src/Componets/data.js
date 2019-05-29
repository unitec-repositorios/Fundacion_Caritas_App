import React, { Component } from 'react';
import Bar from './appBar';
import DataTable from 'react-data-table-component';

const columns=[
  {
    name: 'Identidad',
    selector: 'Identidad',
    sortable: true
  },
  {
    name: 'Nombre',
    selector: 'Nombre_Paciente',
    sortable: true
  },
  {
    name: 'Edad',
    selector: 'Edad',
    sortable: true
  },
  {
    name: 'Edad',
    selector: 'Genero',
    sortable: true
  },
  {
    name: 'Edad',
    selector: 'Estado_Civil',
    sortable: true
  },
  {
    name: 'Edad',
    selector: 'Oficio',
    sortable: true
  },
]

class data extends Component {
    constructor(props){
      super(props);
      this.state={
        list:[]
      }
    }
    componentDidMount(){
      fetch('https://apicaritas.herokuapp.com/api/paciente').then(res => res.json()).then(data => this.setState({list: data}))
    }
    render(){
      return (
        <div>
          <Bar/>
          <DataTable
          title = "Pacientes"
          columns = {columns}
          data={this.state.list}
          pagination= {true}
          paginationPerPage = {5}
          responsive ={true}
          highlightOnHover ={true}
          />
        </div>
      );
    }
}

export default data;

