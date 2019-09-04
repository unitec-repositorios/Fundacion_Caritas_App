const format = require('../JSON_Scripts/JSON_Formats');
const port = 'http://localhost:3001'

export const handleChangeRecMuni  = (id, data, flag) =>{
    if (flag === 'add'){
        console.log('data: ', data.tipo)
        fetch(port + '/api/recursosmunicipales', {
            method: 'POST',
            body: JSON.stringify(format.RECURSOS_MUNICIPALES_POST_Y_PUT(data.tipo)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
           
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        console.log('data:', data.tipo);
        console.log('id: ', id);
        fetch(port + '/api/recursosmunicipales/'+id, {
            method: 'PUT',
            body: JSON.stringify(format.RECURSOS_MUNICIPALES_POST_Y_PUT(data.tipo)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
        
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){
        console.log('id delete: ', id);
        fetch(port + '/api/recursosmunicipales/'+id, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json' 
             },
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
    
}

export const handleChangeTerapeuta = (id, data, flag) => {
    if (flag === 'add'){
        console.log('data: ', data.nombre)
        fetch(port + '/api/terapeuta', {
            method: 'POST',
            body: JSON.stringify(format.TERAPEUTAS_POST_Y_PUT(data.nombre)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
           
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        console.log('data:', data.nombre);
        console.log('id: ', id);
        fetch(port + '/api/terapeuta/' +id, {
            method: 'PUT',
            body: JSON.stringify(format.TERAPEUTAS_POST_Y_PUT(data.nombre)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
        
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){

        fetch(port + '/api/terapeuta/' +id, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json' 
             },
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
};

export const handleChangeRemision = (id, data, flag) => {
    if (flag === 'add'){
        console.log('data: ', data.juez)
        fetch(port + '/api/remision', {
            method: 'POST',
            body: JSON.stringify(format.REMISION_POST_Y_PUT(data.juez)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
           
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        console.log('data:', data.juez);
        console.log('id: ', id);
        fetch(port + '/api/remision/' +id, {
            method: 'PUT',
            body: JSON.stringify(format.REMISION_POST_Y_PUT(data.juez)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
        
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){

        fetch(port + '/api/remision/' +id, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json' 
             },
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
};

export const handleChangeEstadoAtencion = (id, data, flag) => {
    if (flag === 'add'){
        console.log('data: ', data.estado)
        fetch(port + '/api/estadoatencion', {
            method: 'POST',
            body: JSON.stringify(format.ESTADO_ATENCION_POST_Y_PUT(data.estado)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
           
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){

        console.log('data:', data.estado);
        console.log('id: ', id);
        fetch(port + '/api/estadoatencion/' +id, {
            method: 'PUT',
            body: JSON.stringify(format.ESTADO_ATENCION_POST_Y_PUT(data.estado)),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
        
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log(': ', response))

    }else if (flag === 'delete' ){

        fetch(port + '/api/estadoatencion/' +id, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json' 
             },
        }).then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
};
