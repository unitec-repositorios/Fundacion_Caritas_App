import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EditTable from "./EditTable";
import {handleUsuariosChange} from "./ConfigUsuarios_Actions";
import Axios from 'axios';

const port = 'http://localhost:3001';
const usuariosTitle = 'Usuarios';
const usuariosColumns = [ { title: 'Usuario', field: 'usuario' }, { title: 'Contraseña', field: 'contraseña' }, 
                        {title: 'Rol', field: 'rol'} ];
const flagUsuarios = 'usuarios'; 

class ConfigUsuarios extends Component{
    constructor (props){
        super(props);
        this.handleTableUpdate = this.handleTableUpdate.bind(this);
        this.state = {
            usersData: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }
    
    fetchData (){
        Axios.get(port + '/api/usuarios').then(res => {
            this.setState({ usersData: res.data })
        }).catch(error =>{
            console.log(error);
        });
    }

    handleTableUpdate = async (flag) =>{
        let response  = '';
        let data = '';
        response = await Axios.get(port + '/api/'+flag);
        data = await response.data;
        this.setState({municipiosData: data});
    }

    render (){
        return(
            <div>
                <h1 style={{alignSelf: 'center', marginLeft: '30%'}}>Mantenimiento de Usuarios</h1>
                <Grid container  justify='flex-end' style={{width: '80%', alignSelf: 'center', marginLeft:'10%', marginTop:'2%' }}>
                    <Grid container spacing = {2}>
                        <Grid item sm = {12}>
                            <EditTable title = {usuariosTitle} columns = {usuariosColumns} data = {this.state.usersData}
                                handleChange = {handleUsuariosChange} flag = {flagUsuarios} handleTableUpdate = {this.handleTableUpdate}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default ConfigUsuarios;