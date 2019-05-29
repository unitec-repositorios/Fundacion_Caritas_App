import React, { Component } from 'react';
import Bar from './Componets/appBar';
import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

class Form extends Component {
    render() {
        return (
            <div>
                <Bar />
                <div style={{ width: '60%', position: 'absolute', left: '50%', top: '85%', transform: 'translate(-50%, -50%)'}}>
                    <Card>
                        <div style={{ textAlign: 'center' }}>
                            <h3> &nbsp; Nuevo Beneficiario </h3>
                        </div>
                        <CardContent>
                            <Grid container alignItems="space-between" spacing="16" sm="12">
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Nombre" fullWidth />
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Primer apellido" fullWidth />
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Segundo apellido" fullWidth />
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Numero de identidad" fullWidth />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="space-between" spacing="16" sm="12">
                                <Grid item sm="8" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Direccion" fullWidth />
                                    </Paper>
                                </Grid>
                                <Grid item sm="4" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Localidad" fullWidth />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="space-between" spacing="16" sm="12">
                                <Grid item sm="6" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Departamento" fullWidth />
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Telefono" fullWidth />
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <TextField type="date" fullWidth />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="stretch" spacing="24" sm="12">
                                <Grid item sm="1" alignContent="space-around">
                                    <InputLabel htmlFor="estado-civil">Estado Civil</InputLabel>
                                </Grid>
                                <Grid item sm="2">
                                    <Paper>
                                        <NativeSelect id="estado-civil" fullWidth>
                                            <option value="soltero"> Soltero </option>
                                            <option value="casada"> Casado </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm="1" alignContent="space-around">
                                    <InputLabel htmlFor="genero"> &nbsp; Genero</InputLabel>
                                </Grid>
                                <Grid item sm="2">
                                    <Paper>
                                        <NativeSelect id="genero" fullWidth>
                                            <option value="m"> Masculino </option>
                                            <option value="f"> Femenino </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Edad" fullWidth />
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Oficio" fullWidth />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="space-between" spacing="24" sm="12">
                                <Grid item sm="1" alignContent="space-around">
                                    <InputLabel htmlFor="educacion"> Educacion</InputLabel>
                                </Grid>
                                <Grid item sm="3">
                                    <Paper>
                                        <NativeSelect id="educacion" fullWidth>
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
                                <Grid item sm="2" alignContent="space-around">
                                    <InputLabel htmlFor="ocupacion"> &nbsp; Estado de ocupacion</InputLabel>
                                </Grid>
                                <Grid item sm="3">
                                    <Paper>
                                        <NativeSelect id="ocupacion" fullWidth>
                                            <option value="remunerado"> Trabajo remunerado </option>
                                            <option value="no-remunerado"> Trabajo no remunerado </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm="3" alignContent="space-around">
                                    <Paper>
                                        <Input placeholder=" Remision" fullWidth />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="center" spacing="24" sm="12">
                                <Grid item sm="2">
                                    <InputLabel htmlFor="beneficiario-parroquia">Beneficiario por parroquia</InputLabel>
                                </Grid>
                                <Grid item sm="4">
                                    <Paper>
                                        <NativeSelect id="beneficiario-parroquia" fullWidth>
                                            <option value="sps"> San Pedro Sula </option>
                                            <option value="lima"> La Lima </option>
                                            <option value="villanueva"> Villanueva </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm="6">
                                    <Paper>
                                        <Input placeholder=" Colonia" fullWidth />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Divider></Divider>
                        <CardContent>
                            <Grid container alignItems="stretch" spacing="16" sm="12">
                                <Grid item sm="4">
                                    <Paper>
                                        <Input placeholder=" Tipo de caso" fullWidth />
                                    </Paper>
                                </Grid>
                                <Grid item sm="4">
                                    <Paper>
                                        <Input placeholder=" Tratamiento que recibe" fullWidth />
                                    </Paper>
                                </Grid>
                                <Grid item sm="4">
                                    <Paper>
                                        <Input placeholder=" No. Expediente" fullWidth />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="stretch" spacing="24" sm="12">
                                <Grid item sm="2">
                                    <InputLabel htmlFor="estado-atencion">Estado de atencion</InputLabel>
                                </Grid>
                                <Grid item sm="4">
                                    <Paper>
                                        <NativeSelect id="estado-atencion" fullWidth>
                                            <option value="activo"> Activo </option>
                                            <option value="abandono"> Abandono </option>
                                            <option value="terminacion"> Terminacion </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm="2">
                                    <InputLabel htmlFor="terapeuta">Terapeuta</InputLabel>
                                </Grid>
                                <Grid item sm="4">
                                    <Paper>
                                        <NativeSelect id="terapeuta" fullWidth>
                                            <option value="ninguno"> Ninguno </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignItems="stretch" spacing="8" sm="12">
                                <Grid alignContent="center" item sm="4">
                                    <InputLabel htmlFor="tipo-violencia"> &nbsp; Tipo de violencia</InputLabel>
                                    <List id="tipo-violencia">
                                        <ListItem key="psicologica">
                                            <Checkbox />
                                            <ListItemText primary="Violencia psicologica" />
                                        </ListItem>
                                        <ListItem key="fisica">
                                            <Checkbox />
                                            <ListItemText primary="Violencia fisica" />
                                        </ListItem>
                                        <ListItem key="economica">
                                            <Checkbox />
                                            <ListItemText primary="Violencia economica" />
                                        </ListItem>
                                        <ListItem key="sexual">
                                            <Checkbox />
                                            <ListItemText primary="Violencia sexual" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid alignContent="center" item sm="4">
                                    <InputLabel htmlFor="tipo-condicion"> &nbsp; Tipo de condicion</InputLabel>
                                    <List id="tipo-condicion">
                                        <ListItem key="victima">
                                            <Checkbox />
                                            <ListItemText primary="Victima" />
                                        </ListItem>
                                        <ListItem key="agresor">
                                            <Checkbox />
                                            <ListItemText primary="Agresor" />
                                        </ListItem>
                                        <ListItem key="rpt">
                                            <Checkbox />
                                            <ListItemText primary="RPT" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid alignContent="center" item sm="4">
                                    <InputLabel htmlFor="tipo-condicion"> &nbsp; Beneficiados</InputLabel>
                                    <List id="beneficiados">
                                        <ListItem key="ninos">
                                            <ListItemText primary="Niños" />
                                            <Paper>
                                                <Input placeholder=" Cant. niños" fullWidth />
                                            </Paper>
                                        </ListItem>
                                        <ListItem key="ninas">
                                            <ListItemText primary="Ninas" />
                                            <Paper>
                                                <Input placeholder=" Cant. niñas" fullWidth />
                                            </Paper>
                                        </ListItem>
                                        <ListItem key="otros">
                                            <ListItemText primary="Otros" />
                                            <Paper>
                                                <Input placeholder=" Cant. otros" fullWidth />
                                            </Paper>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Button fullWidth color="primary" variant="outlined">
                                Crear
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )}
}

export default Form;