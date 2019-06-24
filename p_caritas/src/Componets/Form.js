import React, { Component } from 'react';
import Card  from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import grey from '@material-ui/core/colors/grey';

class Form extends Component {
  continue = e => {
    e.preventDefault();
   this.props.newStep();
  };
  back=e=>{
    e.preventDefault();
    this.props.prevStep();
}
  render() {
    const {vals,handleChange}=this.props;
    const card_background = grey[200];
    return (
      <div >
        <Grid container justify='flex-end' style={{width: '70%', alignSelf: 'center', margin:'2%'}}>
            <Card style={{backgroundColor: card_background}}>

                    <Card style={{backgroundColor: card_background}}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ textAlign: 'center' }}> &nbsp; Paciente </h3>
                        </div>
                        <CardContent>
                            <Grid container alignContent="space-around" spacing={16} >
                                <Grid item sm={3} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Nombre" fullWidth defaultValue={vals.Nombre} onChange={(e)=>handleChange(e,'Nombre')} />
                                    </Paper>
                                </Grid>
                                <Grid item sm={3} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Primer apellido" fullWidth defaultValue={vals.PrimerA} onChange={(e)=>handleChange(e,'PrimerA')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={3} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Segundo apellido" fullWidth defaultValue={vals.SegundoA} onChange={(e)=>handleChange(e,'SegundoA')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={3} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Numero de identidad" fullWidth defaultValue={vals.NumeroIdent} onChange={(e)=>handleChange(e,'NumeroIdent')}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignContent="space-around" spacing={16}>
                                <Grid item sm={8} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Direccion" fullWidth defaultValue={vals.Direccion} onChange={(e)=>handleChange(e,'Direccion')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={4} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Localidad" fullWidth defaultValue={vals.Localidad} onChange={(e)=>handleChange(e,'Localidad')}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignContent="space-between" spacing={16} >
                                <Grid item sm={6} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Departamento" fullWidth  defaultValue={vals.Departamento} onChange={(e)=>handleChange(e,'Departamento')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={3} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Telefono" fullWidth defaultValue={vals.Telefono} onChange={(e)=>handleChange(e,'Telefono')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={3} >
                                    <Paper>
                                        <TextField type="date" fullWidth onChange={(e)=>handleChange(e,'Date')} value={vals.Date}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignContent="stretch" spacing={24} >
                                <Grid item sm={4}>
                                    <Paper>
                                        <NativeSelect disableUnderline={true} id="estado-civil" fullWidth onChange={(e)=>handleChange(e,'EstadoCivil')} value={vals.EstadoCivil}>
                                            <option value=""> Estado Civil </option>
                                            <option value="soltero"> Soltero </option>
                                            <option value="casada"> Casado </option>
                                            <option value="union_libre"> Union libre </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                           
                                <Grid item sm={4}>
                                    <Paper>
                                        <NativeSelect disableUnderline={true} id="genero" fullWidth onChange={(e)=>handleChange(e,'Genero')} value={vals.Genero}>
                                            <option value=""> Genero </option>
                                            <option value="m"> Masculino </option>
                                            <option value="f"> Femenino </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                             
                                <Grid item sm={4}>
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Oficio" fullWidth defaultValue={vals.Oficio} onChange={(e)=>handleChange(e,'Oficio')} />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignContent="space-between" spacing={24}>
                                <Grid item sm={5}>
                                    <Paper>
                                        <NativeSelect disableUnderline={true} id="educacion" fullWidth onChange={(e)=>handleChange(e,'Educacion')} value={vals.Educacion} >
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
                                <Grid item sm={7}>
                                    <Paper>
                                        <NativeSelect disableUnderline={true} id="ocupacion" fullWidth onChange={(e)=>handleChange(e,'EstadoOcupacion')} value={vals.EstadoOcupacion}>
                                            <option value="">Ocupacion</option>
                                            <option value="remunerado"> Trabajo remunerado </option>
                                            <option value="no-remunerado"> Trabajo no remunerado </option>
                                        </NativeSelect> 
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignContent="center" spacing={24} >
                                <Grid item sm={6}>
                                    <Paper>
                                        <NativeSelect disableUnderline={true} id="beneficiario-parroquia" fullWidth onChange={(e)=>handleChange(e,'Parroquia')} value={vals.Parroquia}>
                                            <option>Beneficiario por parroquia</option>
                                            <option value="sps"> San Pedro Sula </option>
                                            <option value="lima"> La Lima </option>
                                            <option value="villanueva"> Villanueva </option>
                                            <option value="otro">Otros</option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm={6}>
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Colonia" fullWidth defaultValue={vals.Colonia} onChange={(e)=>handleChange(e,'Colonia')} />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignContent="center" spacing={32} >
                                <Grid item sm={3}>
                                    <InputLabel htmlFor="tipo-condicion"> &nbsp; Beneficiados</InputLabel>
                                </Grid>
                                <Grid item sm={3}>
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Cant. niños" fullWidth defaultValue={vals.Ninos} onChange={(e)=>handleChange(e,'Ninos')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={3}>
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Cant. niñas" fullWidth defaultValue={vals.Ninas} onChange={(e)=>handleChange(e,'Ninas')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={3}>
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Cant. otros" fullWidth defaultValue={vals.Otros} onChange={(e)=>handleChange(e,'Otros')}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                      
                        <Grid container alignItems="space-between" spacing={16}>
                                <Grid item sm={6} alignContent="space-around">
                                    <Paper>
                                    <Button fullWidth color="secondary" variant="outlined" onClick={this.back}>Regresar</Button>
                                    </Paper>
                                </Grid>
                                <Grid item sm={6} alignContent="space-around">
                                    <Paper>
                                    <Button fullWidth color="primary" variant="outlined"   onClick={this.continue}>Continuar</Button>
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

export default Form;
