import React, { Component } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import Edit from '@material-ui/icons/Edit';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';
import { forwardRef } from 'react';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    Save: forwardRef((props, ref) => <DoneIcon {...props} ref={ref} />),
    Cancel: forwardRef((props, ref) => <CancelIcon {...props} ref={ref} />),
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