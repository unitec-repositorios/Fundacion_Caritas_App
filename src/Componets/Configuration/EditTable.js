import React, { Component } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import Edit from '@material-ui/icons/Edit';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Remove from '@material-ui/icons/Remove';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { forwardRef } from 'react';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
  };

class EditTable extends Component{
    constructor (props){
        super(props);
        this.state = { };
    }

    // componentWillMount(){
    //     this.props.handleDataUpdate();
    // }
    render(){
        var {title, columns, data, handleChange, flag, handleDataUpdate} = this.props;
        var flagOperation = '';
        return (
            <MaterialTable
                title= {title}
                icons = {tableIcons}
                columns={columns}
                data={data}
                // onChangePage = {handleDataUpdate}
                options = {{
                    paging: false,
                    search: false,
                    pageSize: 1
                }}
                editable={{

                    onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        flagOperation = 'add'
                        const id = 0; // no se va a usar, solo es para rellenar parametros
                        // const datos = [...data];
                        handleChange(id, newData, flagOperation); //Actualiza los datos en la base de datos
                        // datos.push(newData); //pushea a datos el nuevo valor
                        }, 600);
                    }),

                    onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const datos = [...data];
                        var id = '';
                        switch (flag) {
                            case 'Municipios':
                                id = datos[datos.indexOf(oldData)].id_municipio;
                                break;
                            case 'Ocupacion':
                                id = datos[datos.indexOf(oldData)].id_estado;
                                break;
                            case 'Educacion':
                                id = datos[datos.indexOf(oldData)].id_educacion;
                                break;
                            case 'RecMuni':
                                id = datos[datos.indexOf(oldData)].id_recursos;
                                break;
                            case 'Terapeuta':
                                id = datos[datos.indexOf(oldData)].id_terapeuta;
                                break;
                            case 'Remision':
                                id = datos[datos.indexOf(oldData)].id_remision;
                                break;
                            case 'eAtencion':
                                id = datos[datos.indexOf(oldData)].id_estadoa;
                                break;
                            default:
                                id = 0;
                        }
                        flagOperation = 'update';
                        handleChange(id, newData, flagOperation);   //Actualiza los datos en la base de datos
                        // datos[datos.indexOf(oldData)] = newData; //actualiza datos segun el index dado
                        // handleDataUpdate();                 //Actualiza los datos del objeto localmente
                        }, 600);
                    }),

                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const datos = [...data];
                        var id = '';
                        switch (flag) {
                            case 'Municipios':
                                id = datos[datos.indexOf(oldData)].id_municipio;
                                break;
                            case 'Ocupacion':
                                id = datos[datos.indexOf(oldData)].id_estado;
                                break;
                            case 'Educacion':
                                id = datos[datos.indexOf(oldData)].id_educacion;
                                break;
                            case 'RecMuni':
                                id = datos[datos.indexOf(oldData)].id_recursos;
                                break;
                            case 'Terapeuta':
                                id = datos[datos.indexOf(oldData)].id_terapeuta;
                                break;
                            case 'Remision':
                                id = datos[datos.indexOf(oldData)].id_remision;
                                break;
                            case 'eAtencion':
                                id = datos[datos.indexOf(oldData)].id_estadoa;
                                break;
                            default:
                                id = 'falla';
                        }
                        flagOperation = 'delete';
                        const newData = 'Lima'; //no se va a usar, solo es para rellenar parametros
                        handleChange(id , newData, flagOperation);  //elimina el valor en la base de datos
                        // datos.splice(datos[datos.indexOf(oldData)], 1); //elimina el valor en datos segun el index dado
                        // handleDataUpdate(); //actualiza localmente los datos del objeto
                        }, 600);
                    }),
                }}
            />
        );
    }
}

export default EditTable;