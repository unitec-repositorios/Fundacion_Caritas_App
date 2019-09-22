import Axios from 'axios';

const format = require('../JSON_Scripts/JSON_Formats');
const port = 'http://localhost:3001'

export const handleUsuariosChange  = async (id, data, flag) =>{
    var rol = data.rol;
        if(data.rol === 'Administrador')
            rol = 1;
        if (data.rol === 'Usuario')
            rol = 2;
        
    console.log("segundo paso");
    if (flag === 'add' ){
        
        await Axios.post(port + '/api/usuarios', format.USUARIO_POST(data.usuario, data.contraseña, rol))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))

    }else if (flag === 'update'){
        
        await Axios.put(port + '/api/usuarios/'+id, format.USUARIO_PUT(data.usario, data.contraseña, rol))
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Success: ', response))

    }else if (flag === 'delete' ){
        console.log("nombre usuario:", id)
        await Axios.delete(port + '/api/usuarios/'+id)
        .then(res => res.json)
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Succes: ', response))
    }
    
}
