import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import grey from "@material-ui/core/colors/grey";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
const actions = require("../Forms/actions");
const port = "http://localhost:3001/api";

class FormCases extends Component {
  constructor() {
    super();
    this.state = {
      estadosAtencion: [],
      terapeutas: [],
      remisiones: [],
      //         accesosJusticia: [],
      tratamientos: []
    };
  }

  componentDidMount() {
    fetch(port + "/estadoatencion")
      .then(result => result.json())
      .then(data => {
        this.setState({ estadosAtencion: data });
      });
    /*    fetch(port + '/recursosmunicipales')
            .then(result => result.json())
            .then(data => {
                this.setState({ accesosJusticia: data });
            });*/
    fetch(port + "/remision")
      .then(result => result.json())
      .then(data => {
        this.setState({ remisiones: data });
      });
    fetch(port + "/terapeuta")
      .then(result => result.json())
      .then(data => {
        this.setState({ terapeutas: data });
      });
    fetch(port + "/tratamiento")
      .then(result => result.json())
      .then(data => {
        this.setState({ tratamientos: data });
      });
  }

  generateEstadosAtencion = () => {
    return this.state.estadosAtencion.map(item => {
      return <option value={item.id_estadoa}>{item.estado}</option>;
    });
  };

  generateTerapeutas = () => {
    return this.state.terapeutas.map(item => {
      return <option value={item.id_terapeuta}>{item.nombre}</option>;
    });
  };

  generateRemisiones = () => {
    return this.state.remisiones.map(item => {
      return <option value={item.id_remision}>{item.juez}</option>;
    });
  };

  /*  generateAccesosJusticia = () => {
        return this.state.accesosJusticia.map((item) => {
            return <option value={item.id_recursos}>{item.tipo}</option>
        })
    }*/

  generateTratamientos = () => {
    return this.state.tratamientos.map(item => {
      return <option value={item.id_tratamiento}>{item.tratamiento}</option>;
    });
  };

  continue = async e => {
    e.preventDefault();
    this.props.newStep();

    let id = await actions.savePatients(this.props);
    let event = {
      target: {
        value: id
      }
    };
    this.props.handleChange(event, "IdExiste");
    console.log(id);
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const card_background = grey[200];
    const { vals, handleChange, handleLocal, handleCheckBox } = this.props;
    console.log("Soy yo EstadoOcupacion");
    console.log(vals.EstadoOcupacion);
    var radioval = "";
    if (vals.VUrbana) {
      radioval = "VUrbana";
    } else if (vals.VRural) {
      radioval = "VRural";
    }
    return (
      <div>
        {console.log(vals.EstadoOcupacion)}
        <Grid
          container
          justify="flex-end"
          style={{ width: "70%", alignSelf: "center", margin: "2%" }}
        >
          <Card style={{ backgroundColor: card_background }}>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ textAlign: "center" }}> &nbsp; Caso </h3>
            </div>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item sm={4}>
                  <Paper>
                    <Input
                      disableUnderline={true}
                      id="tipo_caso"
                      placeholder=" Tipo de caso"
                      fullWidth
                      defaultValue={vals.TipoCaso}
                      onChange={e => handleChange(e, "TipoCaso")}
                    />
                  </Paper>
                </Grid>
                <Grid item sm={4}>
                  <Paper>
                    <NativeSelect
                      disableUnderline={true}
                      id="tratamiento"
                      fullWidth
                      value={vals.Tratamiento}
                      onChange={e => handleChange(e, "Tratamiento")}
                    >
                      <option value="" disabled>
                        {" "}
                        Tratamiento que recibe{" "}
                      </option>
                      {this.generateTratamientos()}
                    </NativeSelect>
                  </Paper>
                </Grid>
                <Grid item sm={4}>
                  <Paper>
                    <Input
                      disableUnderline={true}
                      id="no_expediente"
                      placeholder=" No. Expediente"
                      fullWidth
                      defaultValue={vals.NumeroEx}
                      onChange={e => handleChange(e, "NumeroEx")}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item sm={4}>
                  <Paper>
                    <NativeSelect
                      disableUnderline={true}
                      id="estado-atencion"
                      disabled="disabled"
                      fullWidth
                      value={vals.EstadoAtencion}
                      onChange={e => handleChange(e, "EstadoAtencion")}
                    >
                      <option value="" disabled>
                        {" "}
                        Espera{" "}
                      </option>
                      {this.generateEstadosAtencion()}
                    </NativeSelect>
                  </Paper>
                </Grid>
                <Grid item sm={4}>
                  <Paper>
                    <NativeSelect
                      disableUnderline={true}
                      id="terapeuta"
                      fullWidth
                      value={vals.Terapeuta}
                      onChange={e => handleChange(e, "Terapeuta")}
                    >
                      <option value="" disabled>
                        {" "}
                        Terapeuta{" "}
                      </option>
                      {this.generateTerapeutas()}
                    </NativeSelect>
                  </Paper>
                </Grid>
                <Grid item sm={4}>
                  <Paper>
                    <NativeSelect
                      disableUnderline={true}
                      id="remision"
                      placeholder=" Remision"
                      fullWidth
                      defaultValue={vals.Remision}
                      onChange={e => handleChange(e, "Remision")}
                    >
                      <option value="" disabled>
                        Remision
                      </option>
                      {this.generateRemisiones()}
                    </NativeSelect>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Grid container alignContent="stretch" spacing={8}>
                <Grid item sm={4}>
                  <InputLabel htmlFor="tipo-violencia">
                    {" "}
                    &nbsp; Tipo de violencia
                  </InputLabel>
                  <List id="tipo-violencia">
                    <ListItem key="1">
                      <Checkbox
                        id="VPsicologia"
                        onChange={e => handleCheckBox(e, "VPsicologica")}
                        checked={vals.VPsicologica}
                      />
                      <ListItemText primary="Violencia psicologica" />
                    </ListItem>
                    <ListItem key="2">
                      <Checkbox
                        onChange={e => handleCheckBox(e, "VFisica")}
                        checked={vals.VFisica}
                      />
                      <ListItemText primary="Violencia fisica" />
                    </ListItem>
                    <ListItem key="3">
                      <Checkbox
                        onChange={e => handleCheckBox(e, "VEconomica")}
                        checked={vals.VEconomica}
                      />
                      <ListItemText primary="Violencia economica" />
                    </ListItem>
                    <ListItem key="4">
                      <Checkbox
                        onChange={e => handleCheckBox(e, "VSexual")}
                        checked={vals.VSexual}
                      />
                      <ListItemText primary="Violencia sexual" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item sm={4}>
                  <InputLabel htmlFor="acceso-justicia">
                    {" "}
                    &nbsp; Acceso a la justicia
                  </InputLabel>
                  <List id="acceso-justicia">
                    <ListItem key="umep">
                      <Checkbox
                        id="Umep"
                        onChange={e => handleCheckBox(e, "CUmep")}
                        checked={vals.CUmep}
                      />
                      <ListItemText primary="UMEP" />
                    </ListItem>
                    <ListItem key="omm">
                      <Checkbox
                        onChange={e => handleCheckBox(e, "COmm")}
                        checked={vals.COmm}
                      />
                      <ListItemText primary="OMM" />
                    </ListItem>
                    <ListItem key="ong">
                      <Checkbox
                        onChange={e => handleCheckBox(e, "COng")}
                        checked={vals.COng}
                      />
                      <ListItemText primary="ONG" />
                    </ListItem>
                    <ListItem key="juzgado">
                      <Checkbox
                        onChange={e => handleCheckBox(e, "CJuzgado")}
                        checked={vals.CJuzgado}
                      />
                      <ListItemText primary="Juzgado" />
                    </ListItem>
                    <ListItem key="fiscal">
                      <Checkbox
                        onChange={e => handleCheckBox(e, "CFiscal")}
                        checked={vals.CFiscal}
                      />
                      <ListItemText primary="Fiscal" />
                    </ListItem>
                  </List>
                </Grid>

                <Grid item sm={4}>
                  <InputLabel htmlFor="causa-violencia">
                    {" "}
                    &nbsp; Causa de violencia
                  </InputLabel>
                  <List id="causa-violencia">
                    <ListItem key="economica">
                      <Checkbox
                        id="Economica"
                        onChange={e => handleCheckBox(e, "CEconomica")}
                        checked={vals.CEconomica}
                      />
                      <ListItemText primary="Economica" />
                    </ListItem>
                    <ListItem key="infidelidad">
                      <Checkbox
                        onChange={e => handleCheckBox(e, "CInfidelidad")}
                        checked={vals.CInfidelidad}
                      />
                      <ListItemText primary="Infidelidad" />
                    </ListItem>
                    <ListItem key="alcoholismo">
                      <Checkbox
                        onChange={e => handleCheckBox(e, "CAlcoholismo")}
                        checked={vals.CAlcoholismo}
                      />
                      <ListItemText primary="Alcoholismo" />
                    </ListItem>
                    <ListItem key="otros">
                      <Checkbox
                        onChange={e => handleCheckBox(e, "COtros")}
                        checked={vals.COtros}
                      />
                      <ListItemText primary="Otros" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Grid container alignContent="stretch" spacing={8}>
                <Grid item sm={4} className="caso">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Ubicacion caso</FormLabel>
                    <RadioGroup
                      aria-label="ubicacion-caso"
                      name="ubicacion-caso"
                      value={radioval}
                      onChange={handleLocal}
                    >
                      <FormControlLabel
                        value="VUrbana"
                        control={<Radio />}
                        label="Urbana"
                      />
                      <FormControlLabel
                        value="VRural"
                        control={<Radio />}
                        label="Rural"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item sm={4}>
                  <InputLabel htmlFor="tipo-condicion">
                    {" "}
                    &nbsp; Tipo de condicion
                  </InputLabel>
                  <List id="tipo-condicion">
                    <ListItem key="victima">
                      <Checkbox
                        id="Victima"
                        onChange={e => handleCheckBox(e, "Victima")}
                        checked={vals.Victima}
                      />
                      <ListItemText primary="Victima" />
                    </ListItem>
                    <ListItem key="agresor">
                      <Checkbox
                        onChange={e => handleCheckBox(e, "Agresor")}
                        checked={vals.Agresor}
                      />
                      <ListItemText primary="Agresor" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item sm={6}>
                  <Paper>
                    <Button
                      fullWidth
                      color="secondary"
                      variant="outlined"
                      onClick={this.back}
                    >
                      Regresar
                    </Button>
                  </Paper>
                </Grid>
                <Grid item sm={6}>
                  <Paper>
                    <Button
                      fullWidth
                      color="primary"
                      variant="outlined"
                      id="ButtonNxt"
                      onClick={this.continue}
                    >
                      Continuar
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default FormCases;
