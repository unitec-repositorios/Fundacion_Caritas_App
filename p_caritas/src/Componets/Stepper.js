import React, { Component } from 'react'
import Bar from './appBar';
import Pacient from './PacientList';
import Main from './main';
import Form3 from './Form3';
import Form2 from './Form2';
import Form from './Form';
import Document from './document';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import logoi from './Recursos/caritasInicio.jpg';

const port = 'https://apicaritas.herokuapp.com';

class Stepper extends Component {

    constructor(props){
        super(props);
        this.state={
            steps: 1, Nombre: '', PrimerA: '', SegundoA: '', NumeroIdent: '', Direccion: '', 
            Localidad: '', Departamento:'', Telefono:'', Date:'', EstadoCivil:'', Genero:'', 
            Edad:'', Oficio:'', Educacion:'', EstadoOcupacion:'', Remision:'', Parroquia:'', 
            Colonia:'', TipoCaso:'',Tratamiento:'',NumeroEx:'',EstadoAtencion:'',Terapeuta:'',
            VPsicologica:'',VFisica:'',VEconomica:'',VSexual:'',Victima:'',Agresor:'',RPT:'',
            Ninos:'',Ninas:'' ,Otros:'' ,CEconomica: '', CInfidelidad: '', CAlcoholismo: '',
            VUrbana: '', VRural: ''
          };  
           
           
    }
    handleChange = (event,input) => {
        this.setState({ [input]: event.target.value });
        
      };
    handleCheckBox = (event,input) => {
        if(event.target.checked ){
            this.setState({[input]:true});
        }else{
            this.setState({[input]:false});
        }    
      };
    newStep=()=>{
        console.log(this.state.Direccion);
        this.setState({steps:this.state.steps + 1});
    }
    prevStep=()=>{
        this.setState({steps:this.state.steps - 1});
        console.log(this.state.VPsicologica);
    }

    render() {
        const {NombreD,PrimerAD ,SegundoAD ,NumeroIdentD ,DireccionD ,LocalidadD ,DepartamentoD,EstadoCivilD,OficioD,TelefonoD,DateD,
            Nombre,PrimerA ,SegundoA ,NumeroIdent ,Direccion ,Localidad ,Departamento,Telefono,Date,EstadoCivil,
            Genero,Oficio,Educacion,EstadoOcupacion,Remision,Parroquia,Colonia,TipoCaso,Tratamiento,NumeroEx,
            EstadoAtencion,Terapeuta,VPsicologica,VFisica,VEconomica,VSexual,Victima,Agresor,CInfidelidad,CEconomica,CAlcoholismo,
            VUrbana,VRural,Ninos,Ninas,Otros
        }=this.state;
        const vals={NombreD,PrimerAD ,SegundoAD ,NumeroIdentD ,DireccionD ,LocalidadD ,DepartamentoD,EstadoCivilD,OficioD,TelefonoD,DateD,
            Nombre,PrimerA ,SegundoA ,NumeroIdent ,Direccion ,Localidad ,Departamento,Telefono,Date,EstadoCivil,
            Genero,Oficio,Educacion,EstadoOcupacion,Remision,Parroquia,Colonia,TipoCaso,Tratamiento,NumeroEx,
            EstadoAtencion,Terapeuta,VPsicologica,VFisica,VEconomica,VSexual,Victima,Agresor,CInfidelidad,CEconomica,CAlcoholismo,
            VUrbana,VRural,Ninos,Ninas,Otros
        };
    
        switch(this.state.steps){
        case 1:
        return (
                <div>
                    <Bar/>
                    
                    <h2 style={{textAlign:'center'}}>Bienvenido al Sistema administrativo de Pacientes de Caritas</h2>
                    <div style={{textAlign:'center'}}>
                    <img src={logoi} width="30%" alt="logo inicio"/>
                    </div>

                    <Fab color="primary" aria-label="Add" style={{margin:'1em',position: 'absolute',
    bottom:0,
    left:"90%"}} onClick={this.newStep}>
                        <AddIcon />
                    </Fab>       
               </div>
            );
        case 2:
            return (
                <div>
                    <Bar/>
                    <Form newStep={this.newStep}handleChange={this.handleChange} vals={vals} prevStep={this.prevStep} /> 
                </div>
            );  
        case 3:
            return (
                <div>
                    <Bar/>
                        <Form2 newStep={this.newStep} handleChange={this.handleChange} handleCheckBox={this.handleCheckBox} prevStep={this.prevStep} vals={vals}/>  
                </div>
            );
        case 4:
            return (
                <div>
                    <Bar/>
                        <Form3  prevStep={this.prevStep} newStep={this.newStep} handleChange={this.handleChange} vals={vals}/>  
                </div>
            );
        case 5:
            savePatients(vals);
            createCase(vals);
            return (
                <div>
                    <Bar/>
                        <Document  prevStep={this.prevStep} handleChange={this.handleChange} vals={vals}/>  
                </div>
            );
        default:
            return( <div>
                <Bar/>
                <Main newStep={this.newStep} handleChange={this.handleChange} vals={vals}/>
                <Pacient/> 
                <Fab color="primary" aria-label="Add" style={{margin:'1em'}}>
                    <AddIcon />
                </Fab>       
           </div>);  
        }
        
    }
}

function savePatients(params) {
    var id = Number(params.NumeroIdent);
    var name = params.Nombre;
    var current_year = new Date();
    var birth_year = new Date(params.Date);
    var age = current_year.getFullYear() - birth_year.getFullYear();
    var gender = params.Genero; 
    var state = params.EstadoCivil;
    var profession = params.Oficio;
    
    let education_id = 0;
    switch (params.Educacion) {
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

    try{
        var response = axios.post(port+'/api/paciente/'+id+'/'+name+'/'+age+'/'+gender+'/'+state+'/'+profession+'/'+education_id+'/'+city_id+'/'+id_therapist+'/'+occupancy_state)
        .then(res => {
            console.log(res);
        });
        console.log(response);
    } catch(e) {
        console.log(e);
    }

}

function createCase(params) {
    var case_number = params.NumeroEx;
    var patient_id = params.NumeroIdent;
    var remission_id = params.Remision;
    
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

    var state_id = params.EstadoAtencion;
    var benefitted_amount = Number(params.Ninos) + Number(params.Ninas) + Number(params.Otros);

    try {
        var response = axios.post(port+'/api/casos/'+case_number+'/'+patient_id+'/'+remission_id+'/'+violence_type_id+'/'+condition_id+'/'+cause_id+'/'+location_violence_id+'/'+city_id+'/'+state_id+'/'+benefitted_amount)
        .then(res => {
            console.log(res);
        })
        console.log(response);
    } catch(e) {
        console.log(e);
    }
    
}

export default Stepper
