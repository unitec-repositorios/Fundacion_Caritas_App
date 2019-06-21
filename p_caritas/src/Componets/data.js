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
import Dialog from './dialog';
import Button from '@material-ui/core/Button';
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
let pos=0;
let Nombres='';
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

const port = 'https://apicaritas.herokuapp.com/';

class data extends Component {
    constructor(props){
      super(props);
      this.state={
        list:[],
        selectedRow:null,
        open:false
      }
    }
    componentDidMount(){
      fetch('https://apicaritas.herokuapp.com/api/paciente').then(res => res.json()).then(data => this.setState({list: data}))
    }
  handleClickOpen = () => {
      this.setState({ open: true });
      console.log(this.state.open);
      
  };
  handleClose = () => {
      this.setState({ open: false });
    };
  
   datas=(selectedRow)=>{  
          this.setState({selectedRow:[selectedRow]});
          this.handleClickOpen();
   }
 
   info=()=>{
      console.log(this.state.selectedRow[0].tableData.id);
      pos=this.state.selectedRow[0].tableData.id;
      console.log(this.state.list[pos].Nombre);
  }
    render() {
      const {open,selectedRow}=this.state;
      const vals={open,selectedRow};
      if(!open){
        return (
        <div style={{maxWidth:'100%'}}>
          <Bar/>
          <MaterialTable
          icons={tableIcons}
         
          title = "Pacientes"
          columns = {columns}
          data={this.state.list}
          isLoading = {this.state.list.length === 0}
          onRowClick={((evt, selectedRow) => this.datas(selectedRow))}
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
      }else{
        return (
          <Dialog handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} vals={vals}/>
        );  
      }
      
    }
}

export default data;

