import React, { Component } from 'react'
import Form2 from './Form2';
import Form from './Form';
import Form3 from './Form3';
class Stepper extends Component {

    constructor(props){
        super(props);
        this.state={
            steps: 1, Nombre: '', PrimerA: '', SegundoA: '', NumeroIdent: '', Direccion: '', 
            Localidad: '', Departamento:'', Telefono:'', Date:'', EstadoCivil:'', Genero:'', 
            Edad:'', Oficio:'', Educacion:'', EstadoOcupacion:'', Remision:'', Parroquia:'', 
            Colonia:'', TipoCaso:'',Tratamiento:'',NumeroEx:'',EstadoAtencion:'',Terapeuta:'',
            VPsicologica:false,VFisica:'',VEconomica:'',VSexual:'',Victima:'',Agresor:'',RPT:'',
            Ninos:'',Ninas:'',Otros:''
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
        const {Nombre,PrimerA ,SegundoA ,NumeroIdent ,Direccion ,Localidad ,Departamento,Telefono,Date,EstadoCivil,
            Genero,Edad,Oficio,Educacion,EstadoOcupacion,Remision,Parroquia,Colonia,TipoCaso,Tratamiento,NumeroEx,
            EstadoAtencion,Terapeuta,VPsicologica,VFisica,VEconomica,VSexual,Victima,Agresor,RPT,Ninos,Ninas,Otros
        }=this.state;
        const vals={ Nombre,PrimerA ,SegundoA ,NumeroIdent ,Direccion ,Localidad ,Departamento,Telefono,Date,EstadoCivil,
            Genero,Edad,Oficio,Educacion,EstadoOcupacion,Remision,Parroquia,Colonia,TipoCaso,Tratamiento,NumeroEx,
            EstadoAtencion,Terapeuta,VPsicologica,VFisica,VEconomica,VSexual,Victima,Agresor,RPT,Ninos,Ninas,Otros};
    
        switch(this.state.steps){
        case 1:
            return (
                <div>
                    <Form newStep={this.newStep} handleChange={this.handleChange} vals={vals}/> 
               </div>
            );
        case 2:
            return (
                <div>
                     <Form2 newStep={this.newStep} handleChange={this.handleChange} handleCheckBox={this.handleCheckBox} prevStep={this.prevStep} vals={vals}/>  
               </div>
            );
        case 3:
            return (
                <div>
                     <Form3  prevStep={this.prevStep} handleChange={this.handleChange}/>  
               </div>
            );  
        default:
        return (
            <div>
                <Form newStep={this.newStep}/> 
           </div>
        );     
        }
        
    }
}

export default Stepper
