import React, { Component } from 'react'
import Bar from './appBar';
import Pacient from './PacientList';
import Main from './main';
import Form2 from './Form2';
import Form from './Form';
import Form3 from './Form3';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
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
                    <Bar/>
                    <Main newStep={this.newStep} handleChange={this.handleChange} vals={vals}/>
                    <Pacient/> 
                    <Fab color="primary" aria-label="Add" style={{margin:'1em'}}>
                        
                        <AddIcon onClick={this.newStep}/>
                        
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
                         <Form3  prevStep={this.prevStep} handleChange={this.handleChange}/>  
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

export default Stepper
