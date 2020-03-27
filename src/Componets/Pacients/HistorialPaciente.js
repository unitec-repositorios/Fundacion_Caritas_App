import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import Paper from "@material-ui/core/Paper";
import MaterialTable from "material-table";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Search from "@material-ui/icons/Search";
import Clear from "@material-ui/icons/Clear";
import ViewColumn from "@material-ui/icons/ViewColumn";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Axios from "axios";

const url = "https://apicaritas.herokuapp.com/api/paciente/";
const port = "http://localhost:3001/api/historial/";
const portAuditoria = "http://localhost:3001/api/auditoria/paciente/";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class HistorialPaciente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: 0,
      auditoria: {},
      historial: []
    };
  }

  handleChange = (event, input) => {
    this.setState({ [input]: event.target.value });
  };

  openDialog = e => {
    this.props.handleClickOpen();
  };

  CloseDialog = e => {
    console.log("close");
    this.props.handleClose();
  };

  styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

  useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 400
      }
    }
  }));

  getPagination = () => {
    return {
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
    };
  };

  getColumns = () => {
    return [
      {
        title: "Id Historial",
        field: "id_historial"
      },
      {
        title: "Numero Expediente",
        field: "num_expediente"
      },
      {
        title: "Nombre",
        field: "nombre"
      },
      {
        title: "Apellido",
        field: "apellido"
      },
      {
        title: "Tipo Constancia",
        field: "tipo_constancia"
      },
      {
        title: "Fecha",
        field: "fecha"
      },
      {
        title: "Comentario",
        field: "comentario"
      }
    ];
  };

  getTableIcons = () => {
    return {
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
  };

  componentDidMount = e => {
    let id = this.props.vals.selectedRow[0].id_paciente;

    Axios.get(port + `${id}`)
      .then(res => {
        this.setState({ historial: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));

    Axios.get(portAuditoria + `${id}`)
      .then(res => {
        this.setState({ auditoria: res.data[0] });
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { auditoria } = this.state;
    const { vals } = this.props;
    const pagination = this.getPagination();
    const card_background = grey[200];
    const tableIcons = this.getTableIcons();
    const columns = this.getColumns();

    if (auditoria.usuario_creacion) {
      return (
        <div>
          <Dialog
            maxWidth="lg"
            open={vals.open2}
            onClose={this.CloseDialog}
            TransitionComponent={Transition}
          >
            <AppBar style={{ position: "relative" }} color="secondary">
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={this.CloseDialog}
                  aria-label="Close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  style={{ marginLeft: "2em", flex: 1 }}
                  color="inherit"
                >
                  Historial de Paciente
                </Typography>
              </Toolbar>
            </AppBar>

            <Grid
              container
              justify="flex-center"
              style={{ width: "75%", alignSelf: "center", margin: "3%" }}
            >
              <Card style={{ backgroundColor: card_background }}>
                <Card style={{ backgroundColor: card_background }}>
                  <div style={{ textAlign: "center" }}>
                    <h3 style={{ textAlign: "center" }}>
                      {" "}
                      &nbsp;Auditoria Paciente{" "}
                    </h3>
                  </div>
                  <CardContent>
                    <Grid container spacing={4}>
                      <Grid item xs={7} sm={3}>
                        <TextField
                          id="user"
                          label="Usuario"
                          variant="outlined"
                          InputProps={{
                            readOnly: true
                          }}
                          defaultValue={auditoria.usuario_creacion}
                        />
                      </Grid>
                      <Grid item xs={7} sm={3}>
                        <TextField
                          id="date"
                          label="Fecha Creacion"
                          variant="outlined"
                          defaultValue={auditoria.fecha_creacion}
                          InputProps={{
                            readOnly: true
                          }}
                        />
                      </Grid>
                      <Grid item xs={7} sm={3}>
                        <TextField
                          id="userMod"
                          label="Usuario Modifico"
                          variant="outlined"
                          value={auditoria.usuario_modifico}
                          InputProps={{
                            readOnly: true
                          }}
                        />
                      </Grid>
                      <Grid item xs={7} sm={3}>
                        <TextField
                          id="dateMod"
                          label="Fecha Ultima Actualizacion"
                          variant="outlined"
                          value={auditoria.fecha_modificacion}
                          InputProps={{
                            readOnly: true
                          }}
                        />
                      </Grid>

                      <Grid item xs={7} sm={12}>
                        <MaterialTable
                          icons={tableIcons}
                          title="Historial"
                          columns={columns}
                          data={this.state.historial}
                          isLoading={this.state.isLoading}
                          localization={pagination}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Card>
            </Grid>
          </Dialog>
        </div>
      );
    }
    return <div>Cargando...</div>;
  }
}

export default HistorialPaciente;
