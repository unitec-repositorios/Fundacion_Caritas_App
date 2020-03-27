import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EditTable from "./EditTable";
import {handleUsuariosChange} from "./ConfigUsuarios_Actions";
import Axios from 'axios';
import NativeSelect from '@material-ui/core/NativeSelect';

const port = 'http://localhost:3001';
const usuariosTitle = 'Usuarios';
const flagUsuarios = 'usuarios'; 
var rolValue;

class ConfigUsuarios extends Component{
    constructor (props){
        super(props);
        this.handleTableUpdate = this.handleTableUpdate.bind(this);
        this.state = {
            usersData: [],
            rolesData: []
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

        Axios.get(port + '/api/roles').then(res => {
            this.setState({ rolesData: res.data })
        }).catch(error =>{
            console.log(error);
        });
    }

    generateRol = (actualRowValue) => {
        return this.state.rolesData.map((item)=>{
            if(item.rol !== actualRowValue)
                return <option value={item.rol}>{item.rol}</option>
        })
    }

    handleTableUpdate = async (flag) =>{
        let response  = '';
        let data = '';
        response = await Axios.get(port + '/api/usuarios');
        data = await response.data;
        this.setState({usersData: data});
    }

    render (){
        return( 
            <div>
                <h1 style={{alignSelf: 'center', marginLeft: '30%'}}>Mantenimiento de Usuarios</h1>
                <Grid container  justify='flex-end' style={{width: '80%', alignSelf: 'center', marginLeft:'10%', marginTop:'2%' }}>
                    <Grid container spacing = {2}>
                        <Grid item sm = {12}>
                            <EditTable 
                                title = {usuariosTitle} 
                                columns = {
                                    [ 
                                        { title: 'Usuario', field: 'usuario' },
                                        { title: 'Contraseña', field: 'contraseña' }, 
                                        {title: 'Rol', field: 'rol', 
                                        editComponent: props =>
                                        <NativeSelect disableUnderline={true} id="rol" value ={props.value} onChange = {(e) => props.onChange(e.target.value)}>
                                            <option value = {props.value}>{props.value}</option>
                                            {this.generateRol(props.value)}
                                        </NativeSelect>
                                        } 
                                    ]
                                } 
                                data = {this.state.usersData}
                                handleChange = {handleUsuariosChange}
                                flag = {flagUsuarios}
                                handleTableUpdate = {this.handleTableUpdate}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default ConfigUsuarios;