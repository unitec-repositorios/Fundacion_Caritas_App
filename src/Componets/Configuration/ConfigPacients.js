import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EditTable from "./EditTable";
import {handleMunicipiosChange} from "./ConfigPacients_Actions";
import {handleChangeOcupacion} from './ConfigPacients_Actions';
import {handleChangeEducacion} from './ConfigPacients_Actions';
import Axios from 'axios';

const port = 'http://localhost:3001'

const flagMuni = 'municipio';
const flagOcupacion = 'estadoocupacion';
const flagEducacion = 'educacion';

const municipiosTitle= "Municipios";
const municipiosColumns= [ { title: 'Nombre', field: 'nombre' } ];
const ocupacionTitle = "Ocupacion";
const ocupacionColumns = [ { title: 'Tipo', field: 'tipo' } ];
const educacionTitle = "Educacion";
const educacionColumns = [ { title: 'Tipo', field: 'tipo' } ];
    
class ConfigPacients extends Component{
    constructor (props){
        super(props);
        this.handleTableUpdate = this.handleTableUpdate.bind(this);
        this.state = {
            municipiosData: [],
            ocupacionData: [],
            educacionData: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }
    
    fetchData (){
        Axios.get(port + '/api/municipio').then(res => {
            this.setState({ municipiosData: res.data })
        }).catch(error =>{
            console.log(error);
        });
        
        Axios.get(port + '/api/estadoocupacion').then(res => {
            this.setState({ ocupacionData: res.data })
        }).catch(error =>{
            console.log(error);
        });

        Axios.get(port + '/api/educacion').then(res => {
            this.setState({ educacionData: res.data })
        }).catch(error =>{
            console.log(error);
        });
    }

    handleTableUpdate = async (flag) =>{
        let response  = '';
        let data = '';
        if(flag === 'municipio'){
            response = await Axios.get(port + '/api/municipio');
            data = await response.data;
            this.setState({municipiosData: data});
        }
        
        if(flag === 'estadoocupacion'){
            response = await Axios.get(port + '/api/estadoocupacion');
            data = await response.data;
            this.setState({ocupacionData: data});
        }
        if(flag === 'educacion'){
            response = await Axios.get(port + '/api/educacion');
            data = await response.data;
            this.setState({educacionData: data});
        }

    }

    render (){
        const {municipiosData, ocupacionData, educacionData} = this.state;
        return(
            <div>
                <h1 style={{alignSelf: 'center', marginLeft: '30%'}}>Mantenimiento de los campos de Paciente</h1>
                <Grid container  justify='flex-end' style={{width: '80%', alignSelf: 'center', marginLeft:'10%', marginTop:'2%' }}>
                    <Grid container spacing = {2}>
                        <Grid item sm = {6}>
                            <EditTable id="Municipios" title = {municipiosTitle} columns = {municipiosColumns} data = {municipiosData}
                                handleChange = {handleMunicipiosChange} flag = {flagMuni} handleTableUpdate = {this.handleTableUpdate}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable id="Ocupacion" title = {ocupacionTitle} columns = {ocupacionColumns} data = {ocupacionData} 
                                handleChange = {handleChangeOcupacion} flag = {flagOcupacion} handleTableUpdate = {this.handleTableUpdate}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable id="Eduacion" title = {educacionTitle} columns = {educacionColumns} data = {educacionData} 
                                handleChange = {handleChangeEducacion} flag = {flagEducacion} handleTableUpdate = {this.handleTableUpdate}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default ConfigPacients;