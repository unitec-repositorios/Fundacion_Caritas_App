import React, { Component } from "react";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Search from "@material-ui/icons/Search";
import Clear from "@material-ui/icons/Clear";
import ViewColumn from "@material-ui/icons/ViewColumn";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import MaterialTable from "material-table";
import Axios from "axios";

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
    title: "ID Caso",
    field: "id_caso",
    cellStyle: {
      width: "100%",
      maxWidth: "100%",
      padding: "none"
    }
  },
  {
    title: "Paciente",
    field: "nombre",
    cellStyle: {
      width: "100%",
      maxWidth: "100%",
      padding: "none"
    }
    // headerStyle: {
    // //   width: 700,
    // //   maxWidth: 700,
    // //   padding: 'none'
    // // }
  },
  {
    title: "Condición",
    field: "condicion"
  },
  {
    title: "Terapeuta",
    field: "terapeuta"
  },
  {
    title: "Causa",
    field: "causa"
  },
  {
    title: "Recursos Municipales",
    field: "recursos"
  },
  {
    title: "Juez",
    field: "juez"
  },
  {
    title: "Municipio",
    field: "municipio"
  },
  {
    title: "Estado Atencion",
    field: "estado_atencion"
  },
  {
    title: "Ubicacion Violencia",
    field: "ubicacion_violencia"
  },
  {
    title: "Tratamiento",
    field: "tratamiento"
  },
  {
    title: "Ultima modificacion",
    field: "ultima_modificacion"
  }
];
const options = {
  resizableColumns: "true"
};

const port = "http://localhost:3001/";

class casos_view extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoading: false
    };
  }

  componentDidMount = async () => {
    await this.fetchCasesData();
  };

  fetchCasesData = async () => {
    this.setState({ isLoading: true });
    await Axios.get(port + "api/caso")
      .then(res => {
        this.setState({ list: res.data });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ isLoading: false });
  };
  /*componentDidUpdate(){
      fetch(port+'/api/casos').then(res => res.json()).then(data => this.setState({list: data}))
    }*/
  // handleClickOpen = () => {
  //     this.setState({ open: true });
  //     console.log(this.state.open);

  // };
  // handleClose = () => {
  //     this.setState({ open: false });
  //   };

  //  datas=(selectedRow)=>{
  //         this.setState({selectedRow:[selectedRow]});
  //         this.handleClickOpen();
  //  }

  //  info=()=>{
  //     console.log(this.state.selectedRow[0].tableData.id);
  //     pos=this.state.selectedRow[0].tableData.id;
  //     console.log(this.state.list[pos].Nombre);
  // }

  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          icons={tableIcons}
          title="Casos"
          columns={columns}
          data={this.state.list}
          isLoading={this.state.isLoading}
          options={options}
          localization={{
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
              emptyDataSourceMessage: "No se encontraron registros",
              filterTooltip: "Filtrar"
            },
            toolbar: {
              searchTooltip: "Buscar",
              searchPlaceholder: "Buscar"
            }
          }}
        />
      </div>
    );
    // }else{
    //   return (
    //     <Dialog handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} vals={vals}/>
    //   );
    // }
  }
}

export default casos_view;
