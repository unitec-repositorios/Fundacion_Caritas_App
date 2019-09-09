import axios from 'axios';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const format = require('../../JSON_Formats');
const port = 'http://localhost:3001/api';
export const savePatients =(params)=> {

    var id = params.vals.NumeroIdent
    var name = params.vals.Nombre;
    var current_year = new Date();
    var birth_year = new Date(params.vals.Date);
    var age = current_year.getFullYear() - birth_year.getFullYear();
    var gender = params.vals.Genero;
    var state = params.vals.EstadoCivil;
    var profession = params.vals.Oficio;

    let education_id = 0;
    switch (params.vals.Educacion) {
        case 's-completa':
            education_id = 7;
            break;
        case 's-incompleta':
            education_id = 6;
            break;
        case 'b-completa':
            education_id = 5;
            break;
        case 'b-incompleta':
            education_id = 4;
            break;
        case 'pb-completa':
            education_id = 3;
            break;
        case 'pb-incompleta':
            education_id = 2;
            break;
        default:
            education_id = 1;
    }

    var mun = params.Parroquia;
    let city_id = 0;
    switch (mun) {
        case 'sps':
            city_id = 1;
            break;
        case 'lima':
            city_id = 2;
            break;
        default:
            city_id = 4;
    }

    var id_therapist = params.Terapeuta === 1 ? params.Terapeuta : (params.Terapeuta === 2 ? 2 : 3);
    var occupancy_state = params.EstadoOcupacion === 'remunerado' ? 1 : 2;

    try {
        var body = format.PACIENTES_POST_Y_PUT(
            id,
            name,
            "apellido",
            age,
            gender,
            profession,
            parseInt(state),
            occupancy_state,
            education_id,
            city_id);

        var response = axios.post(port+'/paciente/',body,{
            headers:{
                'content-type':'application/json',
            }
        })
        .then(res => {
            console.log(res);
        });
        console.log(response);
    } catch (e) {
        console.log(e);
    }

}
export const generarPdf = (props) =>{
    createCase(props);
    
    const input  = document.getElementById("imprimir");
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('img/png');
        const pdf = new jsPDF('p', 'mm', 'legal');
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('Ficha_Paciente.pdf'); 
    });
    savePatients(props)
}
function createCase(params) {
    var case_number = params.vals.NumeroEx;
    var patient_id = params.vals.NumeroIdent;
    var remission_id = params.vals.Remision;
    
    
    let violence_type_id = 0;
    if (params.vals.VPsicologica)
        violence_type_id = 1;
    else if (params.vals.VFisica)
        violence_type_id = 2;
    else if (params.vals.VEconomica)
        violence_type_id = 3;
    else if (params.vals.VSexual)
        violence_type_id = 4;
    
    var condition_id = params.vals.Victima ? 1 : 2;

    let cause_id = 0;
    if (params.vals.CEconomica)
        cause_id = 1;
    else if(params.vals.CInfidelidad)
        cause_id = 2;
    else if (params.vals.CAlcoholismo)
        cause_id = 3;
    
    var location_violence_id = params.vals.VUrbana ? 1 : 2;   

    var mun = params.vals.Parroquia;
    let city_id = 0;
    switch (mun) {
        case 'sps':
            city_id = 1;
            break;
        case 'lima':
            city_id = 2;
            break;
        default:
            city_id = 4;
    }

    var state_id = params.vals.EstadoAtencion;
    var benefitted_amount = Number(params.vals.Ninos) + Number(params.vals.Ninas) + Number(params.vals.Otros);
    var id_terapeuta = params.vals.Terapeuta;

    var patients;
    axios.get(port+'/paciente').then(response=>{
        patients=response.data;
    }).catch(error =>{
        console.log(error);
    });

    const body = format.CASOS_POST_Y_PUT(
        case_number,
        benefitted_amount,
        location_violence_id,
        parseInt(state_id),
        parseInt(mun),
        parseInt(remission_id),
        city_id,
        cause_id,
        parseInt(id_terapeuta),
        0,
        condition_id,
        parseInt(params.vals.Tratamiento)
        );

        var response = axios.post(port+'/caso',body,{
            headers:{
                'content-type':'application/json',
            }
        });

        
    
}