import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EditTable from "./EditTable";
import {handleChangeRecMuni} from './ConfigCases_Actions';
import {handleChangeTerapeuta} from './ConfigCases_Actions';
import {handleChangeRemision} from './ConfigCases_Actions';
import {handleChangeEstadoAtencion} from './ConfigCases_Actions';
import Axios from 'axios';

const port = 'http://localhost:3001'
const flagRecMuni = 'RecMuni';
const flagTerapeuta = 'Terapeuta';
const flagRemision = 'Remision';
const flagEstadoAtencion = 'eAtencion';

const recMuniTitle = 'Recursos Municipales';
const recMuniColumns = [ { title: 'Tipo', field: 'tipo' } ];
const terapeutaTitle = 'Terapeuta';
const terapeutaColumns = [ { title: 'Nombre', field: 'nombre' },{ title: 'Codigo', field: 'codigo' } ];
const remisionTitle = 'Remisión';
const remisionColumns =  [ { title: 'Juez', field: 'juez' } ];
const eAtencionTitle = 'Estado de atención';
const eAtencionColumns = [ { title: 'Estado', field: 'estado' } ];
            
            
class ConfigCases extends Component{
    constructor (props){
        super(props);
        this.handleTableUpdate = this.handleTableUpdate.bind(this);
        this.state = {
            recMuniData: [],
            terapeutaData: [],
            remisionData: [],
            eAtencionData: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData (){
        Axios.get(port + '/api/recursosmunicipales').then(res => {
            this.setState({ recMuniData: res.data })
        }).catch(error =>{
            console.log(error);
        });
        
        Axios.get(port + '/api/terapeuta').then(res => {
            this.setState({ terapeutaData: res.data })
        }).catch(error =>{
            console.log(error);
        });

        Axios.get(port + '/api/remision').then(res => {
            this.setState({ remisionData: res.data })
        }).catch(error =>{
            console.log(error);
        });

        Axios.get(port + '/api/estadoatencion').then(res => {
            this.setState({ eAtencionData: res.data })
        }).catch(error =>{
            console.log(error);
        });
    }

    handleTableUpdate = async (flag) =>{
        let response  = '';
        let data = '';
        if(flag === 'RecMuni'){
            response = await Axios.get(port + '/api/recursosmunicipales');
            data = await response.data;
            this.setState({recMuniData: data});
        }
        
        if(flag === 'Terapeuta'){
            response = await Axios.get(port + '/api/terapeuta');
            data = await response.data;
            this.setState({terapeutaData: data});
        }
        if(flag === 'Remision'){
            response = await Axios.get(port + '/api/remision');
            data = await response.data;
            this.setState({remisionData: data});
        }

        if(flag === 'eAtencion'){
            response = await Axios.get(port + '/api/estadoatencion');
            data = await response.data;
            this.setState({eAtencionData: data});
        }
    }

    render (){
        var {recMuniData, terapeutaData, remisionData, eAtencionData} = this.state;
        return(
            <div>
                <h1 style={{alignSelf: 'center', marginLeft: '30%'}}>Mantenimiento de los campos de Casos</h1>
                <Grid container  justify='flex-end' style={{width: '80%', alignSelf: 'center', marginLeft:'10%', marginTop:'2%' }}>
                    <Grid container spacing = {2}>
                        <Grid item sm = {6}>
                            <EditTable title = {recMuniTitle} columns = {recMuniColumns} data = {recMuniData} 
                                handleChange = {handleChangeRecMuni} flag = {flagRecMuni} handleTableUpdate = {this.handleTableUpdate}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable title = {terapeutaTitle} columns = {terapeutaColumns} data = {terapeutaData} 
                                handleChange = {handleChangeTerapeuta} flag = {flagTerapeuta} handleTableUpdate = {this.handleTableUpdate}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable title = {remisionTitle} columns = {remisionColumns} data = {remisionData} 
                                handleChange = {handleChangeRemision} flag = {flagRemision} handleTableUpdate = {this.handleTableUpdate}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable title = {eAtencionTitle} columns = {eAtencionColumns} data = {eAtencionData} 
                                handleChange = {handleChangeEstadoAtencion} flag = {flagEstadoAtencion} handleTableUpdate = {this.handleTableUpdate}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default ConfigCases;