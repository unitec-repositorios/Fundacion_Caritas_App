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
    render(){
        const {title, columns, data, handleChange} = this.props;
        return (
            <MaterialTable
                title= {title}
                icons = {tableIcons}
                columns={columns}
                data={data}
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
                        const datos = [...data];
                        datos.push(newData);
                        handleChange(datos);
                        }, 600);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const datos = [...data];
                        datos[datos.indexOf(oldData)] = newData;
                        handleChange(datos);
                        }, 600);
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const datos = [...data];
                        datos.splice(datos.indexOf(oldData), 1);
                        handleChange(datos);
                        }, 600);
                    }),
                }}
            />
        );
    }
}

export default EditTable;