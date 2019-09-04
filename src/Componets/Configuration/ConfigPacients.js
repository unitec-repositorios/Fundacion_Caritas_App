import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EditTable from "./EditTable";
import {handleMunicipiosChange} from "./ConfigPacients_Actions";
import {handleChangeOcupacion} from './ConfigPacients_Actions';
import {handleChangeEducacion} from './ConfigPacients_Actions';

const port = 'http://localhost:3001'
const flagMuni = 'Municipios';
const flagOcupacion = 'Ocupacion';
const flagEducacion = 'Educacion';
const municipiosTitle= "Municipios";
const municipiosColumns= [ { title: 'Nombre', field: 'nombre' } ];
const ocupacionTitle = "Ocupacion";
const ocupacionColumns = [ { title: 'Tipo', field: 'tipo' } ];
const educacionTitle = "Educacion";
const educacionColumns = [ { title: 'Tipo', field: 'tipo' } ];
                      
    
class ConfigPacients extends Component{
    constructor (props){
        super(props);
        this.state = {
            municipiosData: [],
            ocupacionData: [],
            educacionData: []
        }
    }

    componentDidMount() {
        this.handleDataUpdate();
    }
    // componentDidMount(){
    //     this.handleDataUpdate();
    // }
    
    handleDataUpdate = () =>{
        fetch(port + '/api/municipio').then(res => res.json()).then(data => {
            this.setState({ municipiosData: data })
        })

        fetch(port + '/api/estadoocupacion').then(res => res.json()).then(data => {
            this.setState({ ocupacionData: data })  
        })

        fetch(port + '/api/educacion').then(res => res.json()).then(data => {
            this.setState({ educacionData: data })
        })
    }

    render (){
        const {municipiosData, ocupacionData, educacionData} = this.state;
        
        return(
            <div>
                <h1 style={{alignSelf: 'center', marginLeft: '30%'}}>Mantenimiento de los campos de Paciente</h1>
                <Grid container  justify='flex-end' style={{width: '80%', alignSelf: 'center', marginLeft:'10%', marginTop:'2%' }}>
                    <Grid container spacing = {2}>
                        <Grid item sm = {6}>
                            <EditTable title = {municipiosTitle} columns = {municipiosColumns} data = {municipiosData}
                                handleChange = {handleMunicipiosChange} flag = {flagMuni} handleDataUpdate = {this.handleDataUpdate}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable title = {ocupacionTitle} columns = {ocupacionColumns} data = {ocupacionData} 
                                handleChange = {handleChangeOcupacion} flag = {flagOcupacion} handleDataUpdate = {this.handleDataUpdate}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable title = {educacionTitle} columns = {educacionColumns} data = {educacionData} 
                                handleChange = {handleChangeEducacion} flag = {flagEducacion} handleDataUpdate = {this.handleDataUpdate}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default ConfigPacients;