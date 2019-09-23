import axios from 'axios';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const format = require('../../JSON_Formats');
const port = 'http://localhost:3001/api';

export const savePatients = (params) => {

    const id = params.vals.NumeroIdent;
    const name = params.vals.Nombre;
    const last_name = params.vals.PrimerA + ' ' + params.vals.SegundoA;
    const current_year = new Date();
    const birth_year = new Date(params.vals.Date);
    const age = current_year.getFullYear() - birth_year.getFullYear();
    const gender = params.vals.Genero;
    const state = params.vals.EstadoCivil;
    const profession = params.vals.Oficio;

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

    const mun = params.Parroquia;
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

    const occupancy_state = params.EstadoOcupacion === 'remunerado' ? 1 : 2;

    try {
        var body = format.PACIENTES_POST_Y_PUT(
            id,
            name,
            last_name,
            age,
            gender,
            profession,
            parseInt(state),
            occupancy_state,
            education_id,
            city_id
        );
       
        var response = axios.post(port+'/paciente/',body,{
            headers:{
                'content-type':'application/json',
            }
        })
        .then(res => {
            const id_paciente = res.data[0].IDPACIENTE; 
            createCase(params, id_paciente);
        }).catch(error => {
            console.log(error);
        });

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

const createCase = (params, patient_id) => {
    const case_number = params.vals.NumeroEx;
    const remission_id = params.vals.Remision;
    const municipal_resource_id = params.vals.AccesoJusticia;
    const mun = params.vals.Parroquia;
    const state_id = params.vals.EstadoAtencion;
    const id_terapeuta = params.vals.Terapeuta;
    
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
    
    var benefitted_amount = Number(params.vals.Ninos) + Number(params.vals.Ninas) + Number(params.vals.Otros);

    const body = format.CASOS_POST_Y_PUT(
        case_number,
        benefitted_amount,
        location_violence_id,
        parseInt(state_id),
        parseInt(mun),
        parseInt(remission_id),
        parseInt(municipal_resource_id),
        cause_id,
        parseInt(id_terapeuta),
        patient_id,
        condition_id,
        parseInt(params.vals.Tratamiento)
    );

    var response = axios.post(port+'/caso/', body, {
        headers:{
            'content-type':'application/json',
        }
    }).then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error);
    });

}