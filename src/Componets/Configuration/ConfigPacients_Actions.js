import Axios from 'axios';

const format = require('../JSON_Scripts/JSON_Formats');
const port = 'http://localhost:3001'

export const handleMunicipiosChange  = async (id, data, flag) =>{
    if (flag === 'add' ){
        
        await Axios.post(port + '/api/municipio', format.MUNICIPIO_POST_Y_PUT(data.nombre))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        await Axios.put(port + '/api/municipio/'+id, format.MUNICIPIO_POST_Y_PUT(data.nombre))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){
        
        await Axios.delete(port + '/api/municipio/'+id)
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
    
}

export const handleChangeOcupacion = async (id, data, flag) => {
    if (flag === 'add'){
        
        await Axios.post(port + '/api/estadoocupacion', format.ESTADO_OCUPACION_POST_Y_PUT(data.tipo))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        await Axios.put(port + '/api/estadoocupacion/' +id, format.ESTADO_OCUPACION_POST_Y_PUT(data.tipo))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){

        await Axios.delete(port + '/api/estadoocupacion/' +id)
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
};

export const handleChangeEducacion = async (id, data, flag) => {
    if (flag === 'add'){
        
        await Axios.post(port + '/api/educacion', format.EDUCACION_POST_Y_PUT(data.tipo))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        await Axios.put(port + '/api/educacion/' +id, format.EDUCACION_POST_Y_PUT(data.tipo))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){

        await Axios.delete(port + '/api/educacion/' +id).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
};
