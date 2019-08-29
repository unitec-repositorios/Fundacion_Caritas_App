import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EditTable from "./EditTable";

class ConfigCases extends Component{
    constructor (props){
        super(props);
        this.state = {
            columns: [ { title: 'Campo', field: 'campo' } ],
            
            title1: 'Acceso a la justicia',
            data1: [ { campo:'UMEP'}, {campo:'OMM'}, {campo:'ONG'}, {campo:'Juzgado'}, {campo:'Fiscalía'} ],
        
            title2: "Terapeuta",
            data2: [ { campo: 'Miriam Fonseca'}, { campo: 'Otro'}, { campo: 'Ninguno'}  ],

            title3: "Remisión",
            data3: [ {campo: 'JEVD'}, { campo: 'JP'}, { campo: 'JEVS'} ],

            title4: "Estado de Atencion",
            data4: [ { campo: 'Activo'},{ campo: 'Abandono'} ],
        }
    }

    handleChange1 = (newData) => {
        this.setState({
            data1: newData
        });
    };

    handleChange2 = (newData) => {
        this.setState({
            data2: newData
        });
    };

    handleChange3 = (newData) => {
        this.setState({
            data3: newData
        });
    };

    handleChange4 = (newData) => {
        this.setState({
            data4: newData
        });
    };

    render (){
        const {title1, title2, title3, title4, columns, data1, data2, data3, data4} = this.state;
        return(
            <div>
                <h1 style={{alignSelf: 'center', marginLeft: '30%'}}>Mantenimiento de los campos de Casos</h1>
                <Grid container  justify='flex-end' style={{width: '80%', alignSelf: 'center', marginLeft:'10%', marginTop:'2%' }}>
                    <Grid container spacing = {2}>
                        <Grid item sm = {6}>
                            <EditTable title = {title1} columns = {columns} data = {data1} handleChange = {this.handleChange1}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable title = {title2} columns = {columns} data = {data2} handleChange = {this.handleChange2}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable title = {title3} columns = {columns} data = {data3} handleChange = {this.handleChange3}/>
                        </Grid>
                        <Grid item sm = {6}>
                            <EditTable title = {title4} columns = {columns} data = {data4} handleChange = {this.handleChange4}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default ConfigCases;