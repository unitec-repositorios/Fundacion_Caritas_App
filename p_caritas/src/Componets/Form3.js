
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
                            <h3> &nbsp; Informacion del denunciado </h3>
                        </div>
                        <CardContent>
                            <Grid container alignContent="space-around" spacing={16} >
                                <Grid item sm={3} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Nombre" fullWidth defaultValue={vals.NombreD} onChange={(e)=>handleChange(e,'NombreD')} />
                                    </Paper>
                                </Grid>
                                <Grid item sm={3} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Primer apellido" fullWidth defaultValue={vals.PrimerAD} onChange={(e)=>handleChange(e,'PrimerAD')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={3} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Segundo apellido" fullWidth defaultValue={vals.SegundoAD} onChange={(e)=>handleChange(e,'SegundoAD')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={3} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Numero de identidad" fullWidth defaultValue={vals.NumeroIdentD} onChange={(e)=>handleChange(e,'NumeroIdentD')}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignContent="space-around" spacing={16}>
                                <Grid item sm={8} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Direccion" fullWidth defaultValue={vals.DireccionD} onChange={(e)=>handleChange(e,'DireccionD')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={4} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Localidad" fullWidth defaultValue={vals.LocalidadD} onChange={(e)=>handleChange(e,'LocalidadD')}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignContent="space-between" spacing={20} >
                                <Grid item sm={6} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Departamento" fullWidth  defaultValue={vals.DepartamentoD} onChange={(e)=>handleChange(e,'DepartamentoD')}/>
                                    </Paper>
                                </Grid>
                                
                                <Grid item sm={3} >
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Telefono" fullWidth defaultValue={vals.TelefonoD} onChange={(e)=>handleChange(e,'TelefonoD')}/>
                                    </Paper>
                                </Grid>
                                <Grid item sm={3} >
                                    <Paper>
                                        <TextField type="date" fullWidth onChange={(e)=>handleChange(e,'DateD')} value={vals.DateD}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardContent>
                            <Grid container alignContent="stretch" spacing={24} >
                                <Grid item sm={6}>
                                    <Paper>
                                        <NativeSelect disableUnderline={true} id="estado-civil" fullWidth onChange={(e)=>handleChange(e,'EstadoCivilD')} value={vals.EstadoCivilD}>
                                            <option value=""> Estado Civil </option>
                                            <option value="soltero"> Soltero </option>
                                            <option value="casada"> Casado </option>
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                           <Grid item sm={6}>
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Oficio" fullWidth defaultValue={vals.OficioD} onChange={(e)=>handleChange(e,'OficioD')} />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                       
                        <CardContent>
                      
                        <Grid container alignItems="space-between" spacing="16" sm="12">
                                <Grid item sm="6" alignContent="space-around">
                                    <Paper>
                                    <Button fullWidth color="secondary" variant="outlined" onClick={this.back}>Regresar</Button>
                                    </Paper>
                                </Grid>
                                <Grid item sm="6" alignContent="space-around">
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