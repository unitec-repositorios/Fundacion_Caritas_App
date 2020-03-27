import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./Forms/FormPatients";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Fab from "@material-ui/core/Fab";
import UpdateIcon from "@material-ui/icons/Update";
import Delete from "@material-ui/icons/Delete";
import axios from "axios";

// const url = 'http://apicaritas.herokuapp.com/api/paciente/';
const url = "https://apicaritas.herokuapp.com/api/paciente/";
const port = "http://localhost:3001/";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
class FullScreenDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: 0,
      Update: {
        Nombre: "",
        PrimerA: "",
        SegundoA: "",
        NumeroIdent: "",
        Direccion: "",
        Localidad: "",
        Departamento: "",
        Telefono: "",
        Date: "",
        EstadoCivil: "",
        Genero: "",
        Edad: 0,
        Oficio: "",
        Educacion: "",
        EstadoOcupacion: "",
        Parroquia: "",
        Colonia: "",
        Ninos: "",
        Ninas: "",
        Otros: ""
      },
      extraData: []
    };
  }

  UpdateFunc = () => {
    console.log(this.props);
    this.setState(prevState => ({
      Update: { ...prevState.Update, Nombre: this.state.Nombre }
    }));
    this.setState(prevState => ({
      Update: { ...prevState.Update, Edad: this.state.Edad }
    }));
    this.setState(prevState => ({
      Update: { ...prevState.Update, Oficio: this.state.Oficio }
    }));
    this.setState(prevState => ({
      Update: { ...prevState.Update, Genero: this.state.Genero }
    }));
    this.setState(prevState => ({
      Update: { ...prevState.Update, Estado: this.state.Estado }
    }));

    axios
      .put(
        url +
          this.state.Id +
          "/" +
          this.state.Nombre +
          "/" +
          this.state.Edad +
          "/" +
          this.state.Genero +
          "/" +
          this.state.Estado +
          "/" +
          this.state.Oficio +
          "/" +
          this.state.extraData.IdEdu +
          "/" +
          this.state.extraData.IdMun +
          "/" +
          this.state.extraData.IdTera +
          "/" +
          this.state.extraData.IdEO,
        {}
      )
      .then(res => console.log(res.data));
    this.CloseDialog();
  };

  deleteFunc = () => {
    axios
      .delete(port + `api/paciente/${this.state.Id}`)
      .then(res => console.log(res.data));

    if (
      window.confirm(
        "¿Está seguro que desea eliminar a " + this.state.Nombre + "?"
      )
    ) {
      this.CloseDialog();
    }
  };

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

  getApellidos = apellido => {
    let pos = this.getPosEspacioApellido(apellido);
    this.setState({ PrimerA: apellido.substring(0, pos) });
    this.setState({
      SegundoA: apellido.substring(pos, apellido.length)
    });
  };

  getPosEspacioApellido = apellido => {
    for (let pos = 0; pos < apellido.length; pos++) {
      let a = apellido.charAt(pos);
      if (a === " ") {
        return pos;
      }
    }
  };

  componentDidMount = e => {
    this.setState({ Nombre: this.props.vals.selectedRow[0].nombre });
    let apellido = this.props.vals.selectedRow[0].apellido;
    this.getApellidos(String(apellido));
    this.setState({ Apellido: this.props.vals.selectedRow[0].apellido });
    this.setState({ Edad: this.props.vals.selectedRow[0].edad });
    this.setState({ Oficio: this.props.vals.selectedRow[0].oficio });
    this.setState({ Genero: this.props.vals.selectedRow[0].genero });
    this.setState({ Tabajo: this.props.vals.selectedRow[0].trabajo });
    this.setState({ Educacion: this.props.vals.selectedRow[0].educacion });
    this.setState({ Estado: this.props.vals.selectedRow[0].estado_civil }); //*/
  };

  render() {
    const { vals } = this.props;
    const {
      Nombre,
      PrimerA,
      SegundoA,
      NumeroIdent,
      Direccion,
      Localidad,
      Departamento,
      Telefono,
      Date,
      EstadoCivil,
      Genero,
      Oficio,
      Educacion,
      EstadoOcupacion,
      Parroquia,
      Colonia,
      Ninos,
      Ninas,
      Otros
    } = this.state;
    const formval = {
      Nombre,
      PrimerA,
      SegundoA,
      NumeroIdent,
      Direccion,
      Localidad,
      Departamento,
      Telefono,
      Date,
      EstadoCivil,
      Genero,
      Oficio,
      Educacion,
      EstadoOcupacion,
      Parroquia,
      Colonia,
      Ninos,
      Ninas,
      Otros
    };

    return (
      <div>
        <Dialog
          fullScreen
          open={vals.open}
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
                Informacion de Paciente
              </Typography>
            </Toolbar>
          </AppBar>
          <doc></doc>
          {!vals.open ? <h1>True</h1> : <h1>false</h1>}
          <Form vals={formval} handleChange={this.handleChange} />
          <Fab
            color="primary"
            aria-label="Add"
            style={{
              margin: "1em",
              position: "absolute",
              bottom: 0,
              left: "90%"
            }}
            onClick={this.UpdateFunc}
          >
            <UpdateIcon />
          </Fab>
          <Fab
            color="primary"
            aria-label="Add"
            style={{
              margin: "1em",
              position: "absolute",
              bottom: 0,
              left: "80%"
            }}
            onClick={this.deleteFunc}
          >
            <Delete />
          </Fab>
        </Dialog>
      </div>
    );
  }
}

export default FullScreenDialog;
