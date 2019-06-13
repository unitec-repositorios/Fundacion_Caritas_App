import React, { Component } from 'react';
import Bar from './appBar';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import ViewColumn from '@material-ui/icons/ViewColumn';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import MaterialTable from 'material-table';

const tableIcons = {
  DetailPanel: ChevronRight,
  Filter: FilterList,
  FirstPage: FirstPage,
  Clear: Clear,
  LastPage: LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  Search: Search,
  SortArrow: ArrowUpward,
  ViewColumn: ViewColumn
};

const columns=[
  {
    title: 'Identidad',
    field: 'Id'
  },
  {
    title: 'Nombre',
    field: 'Nombre'
  },
  {
    title: 'Edad',
    field: 'Edad',
  },
  {
    title: 'Genero',
    field: 'Genero'
  },
  {
    title:'Estado Civil',
    field: 'Estado'
  },
  {
    title: 'Oficio',
    field: 'Oficio'
  }
]

const port = 'https://apicaritas.herokuapp.com';

class data extends Component {
    constructor(props){
      super(props);
      this.state={
        list:[]
      }
    }
    componentDidMount(){
      fetch(port+'/api/paciente').then(res => res.json()).then(data => this.setState({list: data}))
    }
    render(){
      return (
        <div style={{maxWidth:'100%'}}>
          <Bar/>
          <MaterialTable
          icons={tableIcons}
          title = "Pacientes"
          columns = {columns}
          data={this.state.list}
          isLoading = {this.state.list.length === 0}
          localization = {{
            pagination: {
              labelDisplayedRows: "{from}-{to} de {count}",
              labelRowsSelect: "filas",
              labelRowsPerPage: "Filas por pagina:",
              firstAriaLabel: "Primera pagina",
              firstTooltip: "Primera pagina",
              previousAriaLabel: "Pagina anterior",
              previousTooltip: "Pagina anterior",
              nextAriaLabel: "Pagina siguiente",
              nextTooltip: "Pagina siguiente",
              lastAriaLabel: "Ultima pagina",
              lastTooltip: "Ultima pagina"
            },
            body: {
              emptyDataSourceMessage: 'No se encontraron registros',
              filterTooltip: 'Filtrar'
            },
            toolbar: {
              searchTooltip: "Buscar",
              searchPlaceholder: "Buscar"
            }
          }}
          />
        </div>
      );
    }
}

export default data;

