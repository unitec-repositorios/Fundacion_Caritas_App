
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
const port = 'http://localhost:3001/api';
class FormDenounced extends Component {
    constructor(){
        super()
        this.state={
            departamentos:[],
            estadosCiviles:[],
            educacion:[]
        }
    }

    componentDidMount() {
        fetch(port+'/estadocivil')
        .then(result => result.json())
        .then(data => {
            this.setState({ estadosCiviles: data });
        });
        fetch(port+'/educacion')
        .then(result => result.json())
        .then(data => {
            this.setState({ educacion: data });
        });
        fetch(port+'/departamento')
        .then(result => result.json())
        .then(data => {
            this.setState({ departamentos: data });
        });
    }

    generateCivilState = () => {
        return this.state.estadosCiviles.map((item)=>{
            return <option value={item.id_estadoc}>{item.estado}</option>
        })
    }

    generateEducationLevel = () => {
        return this.state.educacion.map((item)=>{
            return <option value={item.id_educacion}>{item.tipo}</option>
        })
    }

    generateDepartamentos = () => {
        return this.state.departamentos.map((item)=>{
            return <option value={item.id_departamento}>{item.nombre}</option>
        })
    }

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
                            <Grid container  spacing={1} >
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
                            <Grid container  spacing={1}>
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
                            <Grid container spacing={1} >
                                <Grid item sm={6} >
                                    <Paper>
                                        <NativeSelect disableUnderline={true} id="departamento" fullWidth onChange={(e)=>handleChange(e,'DepartamentoD')} value={vals.DepartamentoD}>
                                            <option value="" disabled>
                                                Departamento
                                            </option>
                                            {this.generateDepartamentos()}
                                        </NativeSelect>
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
                            <Grid container  spacing={1} >
                                <Grid item sm={4}>
                                    <Paper>
                                        <NativeSelect disableUnderline={true} id="estado-civil" fullWidth onChange={(e)=>handleChange(e,'EstadoCivilD')} value={vals.EstadoCivilD}>
                                            <option value="" disabled>
                                                Estado civil
                                            </option>
                                            {this.generateCivilState()}
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm={4}>
                                    <Paper>
                                        <NativeSelect disableUnderline={true} id="educacion" fullWidth onChange={(e)=>handleChange(e,'EducacionD')} value={vals.EducacionD} >
                                            <option value="" disabled>
                                                    Nivel de educacion
                                            </option>    
                                            {this.generateEducationLevel()}
                                        </NativeSelect>
                                    </Paper>
                                </Grid>
                                <Grid item sm={4}>
                                    <Paper>
                                        <Input disableUnderline={true} placeholder=" Oficio" fullWidth defaultValue={vals.OficioD} onChange={(e)=>handleChange(e,'OficioD')} />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                       
                        <CardContent>
                      
                        <Grid container spacing={1} >
                                <Grid item sm={6} >
                                    <Paper>
                                    <Button fullWidth color="secondary" variant="outlined" onClick={this.back}>Regresar</Button>
                                    </Paper>
                                </Grid>
                                <Grid item sm={6}>
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

export default FormDenounced;