import React, { Component } from 'react';
import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import grey from '@material-ui/core/colors/grey';

const url = 'http://localhost:8000/api/paciente/';
class Form2 extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.newStep();
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({
            //     id: vals.numeroIdent,
            //     nombre: vals.nombre, 
            //     apellido: vals.primerA,
            //     genero: vals.genero,
            //     estado: vals.genero//req.params.oficio,req.params.ocupacion,req.params.edu,req.params.edi,req.params.tera];
            // })
        })
      };
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const card_background = grey[200];
        const {vals,handleChange,handleCheckBox}=this.props;
        return (
            <div>
                <Grid container justify='flex-end' style={{width: '70%', alignSelf: 'center', margin:'2%'}}>
                    <Card style={{backgroundColor: card_background}}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ textAlign: 'center' }}> &nbsp; Caso </h3>
                        </div>
                        <CardContent>
                            <Grid container alignContent="space-between" spacing={16}>
                                <Grid item sm={4}>
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Tipo de caso" fullWidth defaultValue={vals.TipoCaso} onChange={(e)=>handleChange(e,'TipoCaso')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={4}>
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Tratamiento que recibe" fullWidth defaultValue={vals.Tratamiento} onChange={(e)=>handleChange(e,'Tratamiento')} />
                                    </Paper>
                                </Grid>
                                <Grid item sm={4}>
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" No. Expediente" fullWidth defaultValue={vals.NumeroEx} onChange={(e)=>handleChange(e,'NumeroEx')}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignContent="space-between" spacing={16}>
                                <Grid item sm={4}>
                                    <Paper>
                                        <NativeSelect disableUnderline={true} id="estado-atencion" fullWidth value={vals.EstadoAtencion} onChange={(e)=>handleChange(e,'EstadoAtencion')}>
                                            <option value=""> Estado de Atencion </option>
                                            <option value="1"> Activo </option>
                                            <option value="3"> Abandono </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm={4}>
                                    <Paper>
                                        <NativeSelect disableUnderline={true} id="terapeuta" fullWidth value={vals.Terapeuta} onChange={(e)=>handleChange(e,'Terapeuta')}>
                                            <option value=""> Terapeuta </option>
                                            <option value="1">Miriam Fonseca</option>
                                            <option value="2">Otros</option>
                                            <option value="ninguno"> Ninguno </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm={4}>
                                    <Paper>
                                        <NativeSelect disableUnderline={true} placeholder=" Remision" fullWidth defaultValue={vals.Remision} onChange={(e)=>handleChange(e,'Remision')}>
                                            <option value="">Remision</option>
                                            <option value="JEVD">JEVD</option>
                                            <option value="JP">JP</option>
                                            <option value="JEVS">JEVS</option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignContent="stretch" spacing={8}>
                                <Grid item sm={3}>
                                    <InputLabel htmlFor="tipo-violencia"> &nbsp; Tipo de violencia</InputLabel>
                                    <List id="tipo-violencia">
                                        <ListItem key="1">
                                            <Checkbox  onChange={(e)=>handleCheckBox(e,'VPsicologica')} checked={vals.VPsicologica}/>
                                            <ListItemText primary="Violencia psicologica" />
                                        </ListItem>
                                        <ListItem key="2">
                                            <Checkbox onChange={(e)=>handleCheckBox(e,'VFisica')} checked={vals.VFisica}/>
                                            <ListItemText primary="Violencia fisica" />
                                        </ListItem>
                                        <ListItem key="3">
                                            <Checkbox onChange={(e)=>handleCheckBox(e,'VEconomica')} checked={vals.VEconomica}/>
                                            <ListItemText primary="Violencia economica" />
                                        </ListItem>
                                        <ListItem key="4">
                                            <Checkbox onChange={(e)=>handleCheckBox(e,'VSexual')} checked={vals.VSexual}/>
                                            <ListItemText primary="Violencia sexual" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item sm={3}>
                                    <InputLabel htmlFor="tipo-condicion"> &nbsp; Tipo de condicion</InputLabel>
                                    <List id="tipo-condicion">
                                        <ListItem key="victima">
                                        <Checkbox onChange={(e)=>handleCheckBox(e,'Victima')} checked={vals.Victima}/>
                                            <ListItemText primary="Victima" />
                                        </ListItem>
                                        <ListItem key="agresor">
                                        <Checkbox onChange={(e)=>handleCheckBox(e,'Agresor')} checked={vals.Agresor}/>
                                            <ListItemText primary="Agresor" />
                                        </ListItem>
                                        {/* <ListItem key="rpt">
                                            <Checkbox onChange={(e)=>handleCheckBox(e,'RPT')} checked={vals.RPT}/>
                                            <ListItemText primary="RPT" />
                                        </ListItem> */}
                                    </List>
                                </Grid>
                                <Grid item sm={3}>
                                    <InputLabel htmlFor="causa-violencia"> &nbsp; Causa de violencia</InputLabel>
                                    <List id="causa-violencia">
                                        <ListItem key="economica">
                                        <Checkbox onChange={(e)=>handleCheckBox(e,'CEconomica')} checked={vals.CEconomica}/>
                                            <ListItemText primary="Economica" />
                                        </ListItem>
                                        <ListItem key="infidelidad">
                                        <Checkbox onChange={(e)=>handleCheckBox(e,'CInfidelidad')} checked={vals.CInfidelidad}/>
                                            <ListItemText primary="Infidelidad" />
                                        </ListItem>
                                        <ListItem key="alcoholismo">
                                            <Checkbox onChange={(e)=>handleCheckBox(e,'CAlcoholismo')} checked={vals.CAlcoholismo}/>
                                            <ListItemText primary="Alcoholismo" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item sm={3}>
                                    <InputLabel htmlFor="ubicacion-violencia"> &nbsp; Ubicacion caso</InputLabel>
                                    <List id="ubicacion-violencia">
                                        <ListItem key="urbana">
                                        <Checkbox onChange={(e)=>handleCheckBox(e,'VUrbana')} checked={vals.VUrbana}/>
                                            <ListItemText primary="Urbana" />
                                        </ListItem>
                                        <ListItem key="rural">
                                        <Checkbox onChange={(e)=>handleCheckBox(e,'VRural')} checked={vals.VRural}/>
                                            <ListItemText primary="Rural" />
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent> 
                        <Grid container alignContent="space-between" spacing={16}>
                                <Grid item sm={6} >
                                    <Paper>
                                    <Button fullWidth color="secondary" variant="outlined" onClick={this.back}>Regresar</Button>
                                    </Paper>
                                </Grid>
                                <Grid item sm={6} >
                                    <Paper>
                                    <Button fullWidth color="primary" variant="outlined"   onClick={this.continue}>Continuar</Button>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        )
    }
}

export default Form2
