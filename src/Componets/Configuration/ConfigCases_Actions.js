import Axios from 'axios';

const format = require('../JSON_Scripts/JSON_Formats');
const port = 'http://localhost:3001'

export const handleChangeRecMuni  = async (id, data, flag) =>{
    if (flag === 'add'){
        
        await Axios.post(port + '/api/recursosmunicipales', format.RECURSOS_MUNICIPALES_POST_Y_PUT(data.tipo))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        await Axios.put(port + '/api/recursosmunicipales/'+id, format.RECURSOS_MUNICIPALES_POST_Y_PUT(data.tipo))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){
        
        await Axios.delete(port + '/api/recursosmunicipales/'+id).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
    
}

export const handleChangeTerapeuta = async (id, data, flag) => {
    if (flag === 'add'){
        
        await Axios.post(port + '/api/terapeuta', format.TERAPEUTAS_POST_Y_PUT(data.nombre))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        await Axios.put(port + '/api/terapeuta/' +id, format.TERAPEUTAS_POST_Y_PUT(data.nombre))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){

        await Axios.delete(port + '/api/terapeuta/' +id).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
};

export const handleChangeRemision = async (id, data, flag) => {
    if (flag === 'add'){
        
        await Axios.post(port + '/api/remision', format.REMISION_POST_Y_PUT(data.juez))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    
    }else if (flag === 'update'){

        await Axios.put(port + '/api/remision/' +id, format.REMISION_POST_Y_PUT(data.juez))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){

        await Axios.delete(port + '/api/remision/' +id)
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
};

export const handleChangeEstadoAtencion = async (id, data, flag) => {
    if (flag === 'add'){
        
        await Axios.post(port + '/api/estadoatencion', format.ESTADO_ATENCION_POST_Y_PUT(data.estado))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        await Axios.put(port + '/api/estadoatencion/' +id, format.ESTADO_ATENCION_POST_Y_PUT(data.estado))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){

        await Axios.delete(port + '/api/estadoatencion/' +id)
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
};
