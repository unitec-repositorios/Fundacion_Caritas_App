import React, { Component } from 'react';
import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import grey from '@material-ui/core/colors/grey';

class Form extends Component {
  continue = e => {
    e.preventDefault();
    this.props.newStep();
  };
  render() {
    const {vals,handleChange}=this.props;
    const card_background = grey[200];
    return (
      <div >
        <div style={{ width: '60%', position: 'absolute', left: '50%', top: '55%', transform: 'translate(-50%, -50%)'}}>
                    <Card style={{backgroundColor: card_background}}>
                        <div style={{ textAlign: 'center' }}>
                            <h3> &nbsp; Nuevo Paciente </h3>
                        </div>
                        <CardContent>
                            <Grid container alignItems="space-between" spacing="16" sm="12">
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Nombre" fullWidth defaultValue={vals.Nombre} onChange={(e)=>handleChange(e,'Nombre')} />
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Primer apellido" fullWidth defaultValue={vals.PrimerA} onChange={(e)=>handleChange(e,'PrimerA')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Segundo apellido" fullWidth defaultValue={vals.SegundoA} onChange={(e)=>handleChange(e,'SegundoA')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Numero de identidad" fullWidth defaultValue={vals.NumeroIdent} onChange={(e)=>handleChange(e,'NumeroIdent')}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="space-between" spacing="16" sm="12">
                                <Grid item sm="8" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Direccion" fullWidth defaultValue={vals.Direccion} onChange={(e)=>handleChange(e,'Direccion')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm="4" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Localidad" fullWidth defaultValue={vals.Localidad} onChange={(e)=>handleChange(e,'Localidad')}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="space-between" spacing="16" sm="12">
                                <Grid item sm="6" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Departamento" fullWidth  defaultValue={vals.Departamento} onChange={(e)=>handleChange(e,'Departamento')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Telefono" fullWidth defaultValue={vals.Telefono} onChange={(e)=>handleChange(e,'Telefono')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <TextField type="date" fullWidth onChange={(e)=>handleChange(e,'Date')} value={vals.Date}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="stretch" spacing="24" sm="12">
                               
                                <Grid item sm="3">
                                    <Paper>
                                        <NativeSelect id="estado-civil" fullWidth onChange={(e)=>handleChange(e,'EstadoCivil')} value={vals.EstadoCivil}>
                                            <option value=""> Estado Civil </option>
                                            <option value="soltero"> Soltero </option>
                                            <option value="casada"> Casado </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                           
                                <Grid item sm="3">
                                    <Paper>
                                        <NativeSelect id="genero" fullWidth onChange={(e)=>handleChange(e,'Genero')} value={vals.Genero}>
                                            <option value=""> Genero </option>
                                            <option value="m"> Masculino </option>
                                            <option value="f"> Femenino </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Edad" fullWidth defaultValue={vals.Edad} onChange={(e)=>handleChange(e,'Edad')} value={vals.Edad}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Oficio" fullWidth defaultValue={vals.Oficio} onChange={(e)=>handleChange(e,'Oficio')} value={vals.Oficio}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="space-between" spacing="24" sm="12">
                                
                                <Grid item sm="3">
                                    <Paper>
                                        <NativeSelect id="educacion" fullWidth onChange={(e)=>handleChange(e,'Educacion')} value={vals.Educacion} >
                                            <option value=""> Educacion </option>
                                            <option value="analfabeto"> Analfabeto </option>
                                            <option value="pb-incompleta"> Pre-Basica - Incompleta </option>
                                            <option value="pb-completa"> Pre-Basica - Completa </option>
                                            <option value="b-incompleta"> Basica - Incompleta </option>
                                            <option value="b-completa"> Basica - Completa </option>
                                            <option value="s-incompleta"> Superior - Incompleta </option>
                                            <option value="s-completa"> Superior - Completa </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                
                                <Grid item sm="5">
                                    <Paper>
                                        <NativeSelect id="ocupacion" fullWidth onChange={(e)=>handleChange(e,'EstadoOcupacion')} value={vals.EstadoOcupacion}>
                                            <option value="">Ocupacion</option>
                                            <option value="remunerado"> Trabajo remunerado </option>
                                            <option value="no-remunerado"> Trabajo no remunerado </option>
                                        </NativeSelect> 
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Remision" fullWidth defaultValue={vals.Remision} onChange={(e)=>handleChange(e,'Remision')} value={vals.Remision}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="center" spacing="24" sm="12">
                                <Grid item sm="6">
                                    <Paper>
                                        <NativeSelect id="beneficiario-parroquia" fullWidth onChange={(e)=>handleChange(e,'Parroquia')} value={vals.Parroquia}>
                                            <option>Beneficiario por parroquia</option>
                                            <option value="sps"> San Pedro Sula </option>
                                            <option value="lima"> La Lima </option>
                                            <option value="villanueva"> Villanueva </option>
                                            <option value="otro">Otros</option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm="6">
                                    <Paper>
                                        <Input placeholder=" Colonia" fullWidth defaultValue={vals.Colonia} onChange={(e)=>handleChange(e,'Colonia')} value={vals.Colonia}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Button fullWidth color="primary" variant="outlined" onClick={this.continue}>
                            Continue
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                
      </div>
    );
  }
}

export default Form;
