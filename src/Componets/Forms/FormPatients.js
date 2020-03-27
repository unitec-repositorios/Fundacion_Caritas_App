import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import grey from "@material-ui/core/colors/grey";
import MaterialTable from "material-table";

const port = "http://localhost:3001/api";

class FormPatients extends Component {
  constructor() {
    super();
    this.state = {
      estadosCiviles: [],
      educacion: [],
      estadoOcupacion: [],
      parroquia: [],
      departamentos: []
    };
  }

  continue = e => {
    e.preventDefault();
    this.props.newStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  componentDidMount() {
    fetch(port + "/estadocivil")
      .then(result => result.json())
      .then(data => {
        this.setState({ estadosCiviles: data }, () => {});
      });
    fetch(port + "/educacion")
      .then(result => result.json())
      .then(data => {
        this.setState({ educacion: data }, () => {});
      });
    fetch(port + "/estadoocupacion")
      .then(result => result.json())
      .then(data => {
        this.setState({ estadoOcupacion: data }, () => {});
      });
    fetch(port + "/municipio")
      .then(result => result.json())
      .then(data => {
        this.setState({ parroquia: data }, () => {});
      });
    fetch(port + "/departamento")
      .then(result => result.json())
      .then(data => {
        this.setState({ departamentos: data }, () => {});
      });
  }

  generateCivilState = () => {
    return this.state.estadosCiviles.map(item => {
      return <option value={item.id_estadoc}>{item.estado}</option>;
    });
  };

  generateEducationLevel = () => {
    return this.state.educacion.map(item => {
      return <option value={item.id_educacion}>{item.tipo}</option>;
    });
  };

  generateOcupationType = () => {
    return this.state.estadoOcupacion.map(item => {
      return <option value={item.id_estado}>{item.tipo}</option>;
    });
  };

  generateParroquiaType = () => {
    return this.state.parroquia.map(item => {
      return <option value={item.id_municipio}>{item.nombre}</option>;
    });
  };

  generateDepartamentos = () => {
    return this.state.departamentos.map(item => {
      return <option value={item.id_departamento}>{item.nombre}</option>;
    });
  };

  initTable = () => {};

  render() {
    const { vals, handleChange } = this.props;
    const card_background = grey[200];
    return (
      <div className="d-flex justify-content-center">
        <Grid
          co
          ntainer
          justify="flex-end"
          style={{ width: "70%", alignSelf: "center", margin: "2%" }}
        >
          <Card style={{ backgroundColor: card_background }}>
            <Card style={{ backgroundColor: card_background }}>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ textAlign: "center" }}> &nbsp;Beneficiarios </h3>
              </div>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item sm={3}>
                    <Paper>
                      <Input
                        disableUnderline={true}
                        id="nom_paciente"
                        placeholder=" Nombre"
                        fullWidth
                        defaultValue={vals.Nombre}
                        onChange={e => handleChange(e, "Nombre")}
                      />
                    </Paper>
                  </Grid>
                  <Grid item sm={3}>
                    <Paper>
                      <Input
                        disableUnderline={true}
                        id="p_apellido"
                        placeholder=" Primer apellido"
                        fullWidth
                        defaultValue={vals.PrimerA}
                        onChange={e => handleChange(e, "PrimerA")}
                      />
                    </Paper>
                  </Grid>
                  <Grid item sm={3}>
                    <Paper>
                      <Input
                        disableUnderline={true}
                        id="s_apellido"
                        placeholder=" Segundo apellido"
                        fullWidth
                        defaultValue={vals.SegundoA}
                        onChange={e => handleChange(e, "SegundoA")}
                      />
                    </Paper>
                  </Grid>
                  <Grid item sm={3}>
                    <Paper>
                      <Input
                        disableUnderline={true}
                        id="num_identidad"
                        type="number"
                        placeholder=" Numero de identidad"
                        fullWidth
                        defaultValue={vals.NumeroIdent}
                        onChange={e => handleChange(e, "NumeroIdent")}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item sm={6}>
                    <Paper>
                      <Input
                        disableUnderline={true}
                        id="direccion"
                        placeholder=" Direccion Exacta"
                        fullWidth
                        defaultValue={vals.Direccion}
                        onChange={e => handleChange(e, "Direccion")}
                      />
                    </Paper>
                  </Grid>

                  <Grid item sm={6}>
                    <Paper>
                      <NativeSelect
                        disableUnderline={true}
                        id="beneficiario-parroquia"
                        fullWidth
                        onChange={e => handleChange(e, "Parroquia")}
                        value={vals.Parroquia}
                      >
                        <option value="" disabled>
                          Beneficiario por parroquia
                        </option>
                        {this.generateParroquiaType()}
                      </NativeSelect>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Grid container alignContent="space-between" spacing={1}>
                  <Grid item sm={6}>
                    <Paper>
                      <NativeSelect
                        disableUnderline={true}
                        id="departamento"
                        fullWidth
                        onChange={e => handleChange(e, "Departamento")}
                        value={vals.Departamento}
                      >
                        <option value="" disabled>
                          Departamento
                        </option>
                        {this.generateDepartamentos()}
                      </NativeSelect>
                      {/*<Input disableUnderline={true} placeholder=" Departamento" fullWidth  defaultValue={vals.Departamento} onChange={(e)=>handleChange(e,'Departamento')}/>*/}
                    </Paper>
                  </Grid>
                  <Grid item sm={3}>
                    <Paper>
                      <Input
                        disableUnderline={true}
                        id="telefono"
                        type="number"
                        placeholder=" Telefono"
                        fullWidth
                        defaultValue={vals.Telefono}
                        onChange={e => handleChange(e, "Telefono")}
                      />
                    </Paper>
                  </Grid>
                  <Grid item sm={3}>
                    <Paper>
                      <TextField
                        type="date"
                        id="fecha_nacimiento"
                        fullWidth
                        onChange={e => handleChange(e, "Date")}
                        value={vals.Date}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Grid container alignContent="stretch" spacing={1}>
                  <Grid item sm={4}>
                    <Paper>
                      <NativeSelect
                        disableUnderline={true}
                        id="estado-civil"
                        fullWidth
                        onChange={e => handleChange(e, "EstadoCivil")}
                        value={vals.EstadoCivil}
                      >
                        <option value="" disabled>
                          Estado civil
                        </option>
                        {this.generateCivilState()}
                      </NativeSelect>
                    </Paper>
                  </Grid>

                  <Grid item sm={4}>
                    <Paper>
                      <NativeSelect
                        disableUnderline={true}
                        id="genero"
                        fullWidth
                        onChange={e => handleChange(e, "Genero")}
                        value={vals.Genero}
                      >
                        <option value="" disabled>
                          {" "}
                          Genero{" "}
                        </option>
                        <option value="m"> Masculino </option>
                        <option value="f"> Femenino </option>
                      </NativeSelect>
                    </Paper>
                  </Grid>

                  <Grid item sm={4}>
                    <Paper>
                      <Input
                        disableUnderline={true}
                        id="oficio"
                        placeholder=" Oficio"
                        fullWidth
                        defaultValue={vals.Oficio}
                        onChange={e => handleChange(e, "Oficio")}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Grid container alignContent="space-between" spacing={1}>
                  <Grid item sm={5}>
                    <Paper>
                      <NativeSelect
                        disableUnderline={true}
                        id="educacion"
                        fullWidth
                        onChange={e => handleChange(e, "Educacion")}
                        value={vals.Educacion}
                      >
                        <option value="" disabled>
                          Nivel de educacion
                        </option>
                        {this.generateEducationLevel()}
                      </NativeSelect>
                    </Paper>
                  </Grid>
                  <Grid item sm={7}>
                    <Paper>
                      <NativeSelect
                        disableUnderline={true}
                        id="ocupacion"
                        fullWidth
                        onChange={e => handleChange(e, "EstadoOcupacion")}
                        value={vals.EstadoOcupacion}
                      >
                        <option value="" disabled>
                          Ocupacion
                        </option>
                        {this.generateOcupationType()}
                      </NativeSelect>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>

              <CardContent>
                <Grid container alignContent="center" spacing={1}>
                  <Grid item sm={3}>
                    <InputLabel htmlFor="tipo-condicion">
                      {" "}
                      &nbsp;Beneficiados Indirectos
                    </InputLabel>
                  </Grid>
                  <Grid item sm={3}>
                    <Paper>
                      <Input
                        disableUnderline={true}
                        id="CantNiños"
                        type="number"
                        placeholder=" Cant. niños"
                        fullWidth
                        defaultValue={vals.Ninos}
                        onChange={e => handleChange(e, "Ninos")}
                      />
                    </Paper>
                  </Grid>
                  <Grid item sm={3}>
                    <Paper>
                      <Input
                        disableUnderline={true}
                        id="CantNiñas"
                        type="number"
                        placeholder=" Cant. niñas"
                        fullWidth
                        defaultValue={vals.Ninas}
                        onChange={e => handleChange(e, "Ninas")}
                      />
                    </Paper>
                  </Grid>
                  <Grid item sm={3}>
                    <Paper>
                      <Input
                        disableUnderline={true}
                        id="CantOtros"
                        type="number"
                        placeholder=" Cant. otros"
                        fullWidth
                        defaultValue={vals.Otros}
                        onChange={e => handleChange(e, "Otros")}
                      />
                    </Paper>
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
                        id="NextBtn"
                        color="primary"
                        variant="outlined"
                        onClick={this.continue}
                      >
                        Continuar
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default FormPatients;
