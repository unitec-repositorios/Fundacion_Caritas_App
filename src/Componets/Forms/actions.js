import axios from 'axios';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const port = 'https://caritas-ui.firebaseapp.com/';
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
        var response = axios.post(port + 'api/paciente/' + id + '/' + name + '/' + age + '/' + gender + '/' + state + '/' + profession + '/' + education_id + '/' + city_id + '/' + id_therapist + '/' + occupancy_state)
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
    if (params.VPsicologica)
        violence_type_id = 1;
    else if (params.VFisica)
        violence_type_id = 2;
    else if (params.VEconomica)
        violence_type_id = 3;
    else if (params.VSexual)
        violence_type_id = 4;
    
    var condition_id = params.Victima ? 1 : 2;

    let cause_id = 0;
    if (params.CEconomica)
        cause_id = 1;
    else if(params.CInfidelidad)
        cause_id = 2;
    else if (params.CAlcoholismo)
        cause_id = 3;
    
    var location_violence_id = params.VUrbana ? 1 : 2;   

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

    var state_id = params.vals.EstadoAtencion;
    var benefitted_amount = Number(params.vals.Ninos) + Number(params.vals.Ninas) + Number(params.vals.Otros);
        axios.post(port+'api/casos/'+case_number+'/'+patient_id+'/'+
        remission_id+'/'+violence_type_id+'/'+condition_id+'/'+cause_id+'/'+location_violence_id+
        '/'+city_id+'/'+state_id+'/'+benefitted_amount).catch(e=>{console.log(e)}) 
    
}