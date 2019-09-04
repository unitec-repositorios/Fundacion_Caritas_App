import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EditTable from "./EditTable";
import {handleChangeRecMuni} from './ConfigCases_Actions';
import {handleChangeTerapeuta} from './ConfigCases_Actions';
import {handleChangeRemision} from './ConfigCases_Actions';
import {handleChangeEstadoAtencion} from './ConfigCases_Actions';

const port = 'http://localhost:3001'
const flagRecMuni = 'RecMuni';
const flagTerapeuta = 'Terapeuta';
const flagRemision = 'Remision';
const flagEstadoAtencion = 'eAtencion'

class ConfigCases extends Component{
    constructor (props){
        super(props);
        this.state = {
            recMuniTitle: 'Recursos Municipales',
            recMuniColumns: [ { title: 'Tipo', field: 'tipo' } ],
            recMuniData: [],
            
            terapeutaTitle: 'Terapeuta',
            terapeutaColumns: [ { title: 'Nombre', field: 'nombre' } ],
            terapeutaData: [],

            remisionTitle: 'Remisión',
            remisionColumns: [ { title: 'Juez', field: 'juez' } ],
            remisionData: [],
            
            eAtencionTitle: 'Estado de atención',
            eAtencionColumns: [ { title: 'Estado', field: 'estado' } ],
            eAtencionData: [],
        }
    }

    componentDidMount() {
        fetch(port + '/api/recursosmunicipales').then(res => res.json()).then(data => {
            this.setState({ recMuniData: data })
          })
        
        fetch(port + '/api/terapeuta').then(res => res.json()).then(data => {
            this.setState({ terapeutaData: data })  
          })

        fetch(port + '/api/remision').then(res => res.json()).then(data => {
          this.setState({ remisionData: data })
        })

        fetch(port + '/api/estadoatencion').then(res => res.json()).then(data => {
            this.setState({ eAtencionData: data })
        })
    }

    render (){
        var {recMuniTitle, terapeutaTitle, remisionTitle, eAtencionTitle,
            recMuniColumns, terapeutaColumns, remisionColumns, eAtencionColumns,
            recMuniData, terapeutaData, remisionData, eAtencionData} = this.state;
        return(
            <div>
                <h1 style={{alignSelf: 'center', marginLeft: '30%'}}>Mantenimiento de los campos de Casos</h1>
                <Grid container  justify='flex-end' style={{width: '80%', alignSelf: 'center', marginLeft:'10%', marginTop:'2%' }}>
                    <Grid container spacing = {2}>
                        <Grid item sm = {6}>
                            <EditTable title = {recMuniTitle} columns = {recMuniColumns} data = {recMuniData} 
                                handleChange = {handleChangeRecMuni} flag = {flagRecMuni}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable title = {terapeutaTitle} columns = {terapeutaColumns} data = {terapeutaData} 
                                handleChange = {handleChangeTerapeuta} flag = {flagTerapeuta}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable title = {remisionTitle} columns = {remisionColumns} data = {remisionData} 
                                handleChange = {handleChangeRemision} flag = {flagRemision}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable title = {eAtencionTitle} columns = {eAtencionColumns} data = {eAtencionData} 
                                handleChange = {handleChangeEstadoAtencion} flag = {flagEstadoAtencion}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default ConfigCases;