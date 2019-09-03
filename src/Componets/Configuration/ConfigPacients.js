import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import EditTable from "./EditTable";

class ConfigPacients extends Component{
    constructor (props){
        super(props);
        this.state = {
            title1: "Beneficiario por Parroquia",
            columns: [ { title: 'Campo', field: 'campo' } ],
            data1: [ { campo: 'San Pedro Sula'},{ campo: 'La Lima'}, {campo: 'Villanueva'}, {campo: 'otros'} ],

            title2: "Ocupacion",
            data2: [ {campo: "Trabajo Remunerado" }, {campo: "Trabajo no remunerado"} ],

            title3: "Educacion",
            data3: [{campo: "Analfabeto"}, {campo: "Pre-Basica - Incompleta"}, {campo: "Pre-Basica - Completa"},
                    {campo: "Basica - Incompleta"}, {campo: "Basica - Completa"}, {campo: "Pre-Basica - Incompleta"},
                    {campo: "Superior - Incompleta"}, {campo: "Superior - Completa"}
            ]
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

    render (){
        const {title1, title2, title3, columns, data1, data2, data3} = this.state;
        
        return(
            <div>
                <h1 style={{alignSelf: 'center', marginLeft: '30%'}}>Mantenimiento de los campos de Paciente</h1>
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
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default ConfigPacients;