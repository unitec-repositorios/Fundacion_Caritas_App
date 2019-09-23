import React, { Component } from 'react';
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
import Dialog from '../dialog';
import Mayre from 'mayre';
import Axios from 'axios';

const port = 'http://localhost:3001/';

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
const columns = [
  {
    title: 'Identidad',
    field: 'identidad'
  },
  {
    title: 'Nombre',
    field: 'nombre'
  },
  {
    title: 'Apellidos',
    field: 'apellido'
  },
  {
    title: 'Edad',
    field: 'edad',
  },
  {
    title: 'Genero',
    field: 'genero'
  },
  {
    title: 'Oficio',
    field: 'oficio'
  },
  {
    title: 'Estado Civil',
    field: 'estado_civil'
  },
  {
    title: 'Trabajo',
    field: 'trabajo'
  },
  {
    title: 'Educacion',
    field: 'educacion'
  }
]

class Pacients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selectedRow: null,
      open: false,
      isLoading: false
    }
  }
  componentDidMount = async () => {
    await this.fetchPacientsData();
  }

  fetchPacientsData = async () => {
    this.setState({ isLoading: true });
    await Axios.get(port + 'api/paciente').then(res => {
      this.setState({ list: res.data })
    }).catch(error =>{
      console.log(error);
    });
    this.setState({ isLoading: false });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  datas = (selectedRow) => {
    this.setState({ selectedRow: [selectedRow] });
    this.handleClickOpen();
  }

  render() {
    const { open, selectedRow } = this.state;
    const vals = { open, selectedRow };
    const pagination = {
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
    }

    return (
      <Mayre
        of={
          <div style={{ width: "100%" }}>
            <MaterialTable
              icons={tableIcons}
              title="Pacientes"
              columns={columns}
              data={this.state.list}
              isLoading={this.state.isLoading}
              onRowClick={((evt, selectedRow) => this.datas(selectedRow))}
              localization={pagination}
            />

          </div>}
        or={<Dialog handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} vals={vals} />}
        when={!open}
      />

    );


  }
}

export default Pacients;

