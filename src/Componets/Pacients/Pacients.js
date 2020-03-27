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
import PacientHistory from "./HistorialPaciente";
import Dialog from "../dialog";
import Axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import Info from "@material-ui/icons/Info";
import CheckIcon from "@material-ui/icons/Check";
import Cancel from "@material-ui/icons/Cancel";
import Edit from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Tooltip from "@material-ui/core/Tooltip";
import MaterialTable from "material-table";
import Grid from "@material-ui/core/Grid";
import ReportPantientDialog from "./ReportPantientDialog";
import CasoDetailDialog from "./CasoDetailDialog";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const port = "http://localhost:3001/";

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
  ViewColumn: ViewColumn,
  Check: CheckIcon,
  Edit: Edit,
  Delete: DeleteIcon
};

class Pacients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      show: false,
      selectedRow: null,
      open: false,
      open2: false,
      openReport: false,
      openViewCaso: false,
      isAbandon: false,
      isLoading: false,
      estadoCivilSelect: {},
      trabajoSelect: {},
      educacionSelect: {},
      departamentoSelect: {}
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  componentDidMount = async () => {
    await this.fetchPacientsData();
    await this.getEstadoCivil();
    await this.getTabajo();
    await this.getEducacion();
    await this.getDepartamentos();
  };

  fetchPacientsData = async () => {
    this.setState({ isLoading: true });
    await Axios.get(port + "api/paciente")
      .then(res => {
        let data = new Array();
        let newData = new Array();
        data = res.data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].borrado == 1) {
            newData.push(data[i]);
          }
        }
        this.setState({ list: newData });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ isLoading: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickOpen2 = () => {
    this.setState({ open2: true });
  };

  handleClickOpenReport = () => {
    this.setState({ openReport: true });
  };

  handleClickOpenDialogViewCaso = () => {
    this.setState({ openViewCaso: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };

  handleCloseReport = () => {
    this.setState({ openReport: false });
  };

  handleCloseDialogViewCaso = () => {
    this.setState({ openViewCaso: false });
    //this.setState({ hide: false });
  };

  getEstadoCivil = async () => {
    await Axios.get(port + "api/estadocivil")
      .then(res => {
        let array = new Array();
        array = res.data;
        let newObj = {};
        for (let c = 0; c < array.length; c++) {
          newObj[array[c].id_estadoc] = array[c].estado;
        }
        console.log(newObj);
        this.setState({ estadoCivilSelect: newObj });
      })
      .catch(error => console.log(error));
  };

  getTabajo = async () => {
    await Axios.get(port + "api/estadoocupacion")
      .then(res => {
        let array = new Array();
        array = res.data;
        let newObj = {};
        for (let c = 0; c < array.length; c++) {
          newObj[array[c].id_estado] = array[c].tipo;
        }
        this.setState({ trabajoSelect: newObj });
      })
      .catch(error => console.log(error));
  };

  getEducacion = async () => {
    await Axios.get(port + "api/educacion")
      .then(res => {
        let array = new Array();
        array = res.data;
        let newObj = {};
        for (let c = 0; c < array.length; c++) {
          newObj[array[c].id_educacion] = array[c].tipo;
        }
        this.setState({ educacionSelect: newObj });
      })
      .catch(error => console.log(error));
  };

  getDepartamentos = async () => {
    await Axios.get(port + "api/departamento")
      .then(res => {
        let array = new Array();
        array = res.data;
        let newObj = {};
        for (let c = 0; c < array.length; c++) {
          newObj[array[c].id_departamento] = array[c].nombre;
        }
        this.setState({ departamentoSelect: newObj });
      })
      .catch(error => console.log(error));
  };

  datas = selectedRow => {
    this.setState({ selectedRow: [selectedRow.rowData] });
    this.handleClickOpen();
  };

  goToAuditoria = selectedRow => {
    this.setState({ selectedRow: [selectedRow.rowData] });
    this.handleClickOpen2();
  };

  goToReport = (selectedRow, isAbandon) => {
    this.setState({ selectedRow: [selectedRow.rowData], isAbandon: isAbandon });
    this.handleClickOpenReport();
  };

  goToViewCaso = selectedRow => {
    this.setState({ selectedRow: [selectedRow.rowData] });
    this.handleClickOpenDialogViewCaso();
  };

  deletePaciente = async id => {
    // if (window.confirm("¿Está seguro que desea eliminar a " + name + "?")) {
    await Axios.get(port + `api/caso/delete/${id}`).then(res =>
      console.log(res.data)
    );
    await Axios.get(port + `api/paciente/delete/${id}`).then(res =>
      console.log(res.data)
    );
    // this.fetchPacientsData();
    //}
  };

  updatePaciente = async newData => {
    await Axios.put(
      port + `api/paciente/update/${newData.id_paciente}`,
      newData
    ).then(res => console.log(res));
  };
  
  getExcelDataPatient() {
	var excelData = [];
	var dataList = this.state.list;
	for(var pos=0; pos<dataList.length; pos++) {
		excelData.push({ 
						"correlativo": pos,
						"identidad": dataList[pos].identidad, 
						"nombres": dataList[pos].nombres, 
						"apellidos": dataList[pos].apellidos, 
						"edad": dataList[pos].edad, 
						"genero": dataList[pos].genero, 
						"oficio": dataList[pos].oficio, 
						"estado_civil": this.state.estadoCivilSelect[dataList[pos].id_estadoc], 
						"trabajo": this.state.trabajoSelect[dataList[pos].id_estado], 
						"educacion": this.state.educacionSelect[dataList[pos].id_educacion], 
						"departamento": this.state.departamentoSelect[dataList[pos].id_departamento]
		});
	}
	return excelData;
  };

  postUsuarioModifico = async id => {
    let usuario = localStorage.getItem("user");
    Axios.post(port + "api/paciente_modificacion/" + id, { usuario })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  render() {
    const { open, open2, hide, selectedRow } = this.state;
    const vals = { open, open2, hide, selectedRow };
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
        emptyDataSourceMessage: "No se encontraron registros",
        filterTooltip: "Filtrar",
        editTooltip: "Editar",
        deleteTooltip: "Eliminar",
        editRow: {
          saveTooltip: "Guardar",
          cancelTooltip: "Cancelar",
          deleteText: "Estás seguro que quieres eliminar este paciente?"
        }
      },
      header: {
        actions: "Acciones"
      },
      toolbar: {
        searchTooltip: "Buscar",
        searchPlaceholder: "Buscar"
      }
    };

    const options = {
      resizableColumns: "true"
    };

    const columns = [
      {
        title: "Identidad",
        field: "identidad"
      },
      {
        title: "Nombre",
        field: "nombres"
      },
      {
        title: "Apellidos",
        field: "apellidos"
      },
      {
        title: "Edad",
        field: "edad"
      },
      {
        title: "Genero",
        field: "genero"
      },
      {
        title: "Oficio",
        field: "oficio"
      },
      {
        title: "Estado Civil",
        field: "id_estadoc",
        lookup: this.state.estadoCivilSelect
      },
      {
        title: "Trabajo",
        field: "id_estado",
        lookup: this.state.trabajoSelect
      },
      {
        title: "Educacion",
        field: "id_educacion",
        lookup: this.state.educacionSelect
      },
      {
        title: "Deparamento",
        field: "id_departamento",
        lookup: this.state.departamentoSelect
      },
      {
        field: "ver",
        title: "Ver",
        render: rowData => (
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Tooltip title="Caso del paciente">
                <IconButton
                  onClick={() => this.goToViewCaso({ rowData }, true)}
                >
                  <VisibilityIcon color="secondary"></VisibilityIcon>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={3}>
              <Tooltip title="Auditoria del Paciente">
                <IconButton onClick={() => this.goToAuditoria({ rowData })}>
                  <MenuBookIcon color="secondary"></MenuBookIcon>
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        )
      },
      {
        field: "reportes",
        title: "Reportes",
        render: rowData => (
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Tooltip title="Reporte de Abandono">
                <IconButton onClick={() => this.goToReport({ rowData }, true)}>
                  <ExitToAppIcon color="secondary"></ExitToAppIcon>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={3}>
              <Tooltip title="Reporte de Terminado">
                <IconButton onClick={() => this.goToReport({ rowData }, false)}>
                  <DoneAllIcon color="secondary"></DoneAllIcon>
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        )
      }
    ];

    return (
      <React.Fragment>
        <div style={{ width: "100%" }}>
          <MaterialTable
            icons={tableIcons}
            title="Pacientes"
            columns={columns}
            data={this.state.list}
            isLoading={this.state.isLoading}
            localization={pagination}
            options={options}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      // Update in DataBase
                      this.updatePaciente(newData);
                      this.postUsuarioModifico(oldData.id_paciente);
                      // Update in the state
                      this.setState(prevState => {
                        const list = [...prevState.list];
                        list[list.indexOf(oldData)] = newData;
                        return { ...prevState, list };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    //Delete in DataBase
                    this.deletePaciente(oldData.id_paciente);
                    //Delete in state
                    this.setState(prevState => {
                      const list = [...prevState.list];
                      list.splice(list.indexOf(oldData), 1);
                      return { ...prevState, list };
                    });
                  }, 600);
                })
            }}
          />
		  
		  <br/>
		  <ExcelFile filename="Pacientes" element={<button>Exportar Excel</button>}>
                <ExcelSheet data={this.getExcelDataPatient()} name="Pacientes">
                    <ExcelColumn label="Correlativo" value="correlativo"/>
                    <ExcelColumn label="No. Identidad" value="identidad"/>
                    <ExcelColumn label="Nombres" value="nombres"/>
					<ExcelColumn label="Apellidos" value="apellidos"/>
                    <ExcelColumn label="Edad" value="edad"/>
                    <ExcelColumn label="Genero" value="genero"/>
					<ExcelColumn label="Oficio" value="oficio"/>
                    <ExcelColumn label="Estado Civil" value="estado_civil"/>
                    <ExcelColumn label="Trabajo" value="trabajo"/>
					<ExcelColumn label="Educacion" value="educacion"/>
                    <ExcelColumn label="Departamento" value="departamento"/>
                </ExcelSheet>				
		  </ExcelFile>

        </div>

        {this.state.open ? (
          <Dialog
            handleClickOpen={this.handleClickOpen}
            handleClose={this.handleClose}
            vals={this.state}
          />
        ) : (
          <div></div>
        )}

        {this.state.open2 ? (
          <PacientHistory
            handleClickOpen={this.handleClickOpen2}
            handleClose={this.handleClose2}
            vals={this.state}
          />
        ) : (
          <div></div>
        )}

        {this.state.openReport ? (
          <ReportPantientDialog
            handleClickOpen={this.handleClickOpenReport}
            handleClose={this.handleCloseReport}
            vals={this.state}
          />
        ) : (
          <div></div>
        )}

        {this.state.openViewCaso ? (
          <CasoDetailDialog
            handleClickOpen={this.handleClickOpenDialogViewCaso}
            handleClose={this.handleCloseDialogViewCaso}
            vals={this.state}
          />
        ) : (
          <div></div>
        )}
      </React.Fragment>
    );
  }
}

export default Pacients;
