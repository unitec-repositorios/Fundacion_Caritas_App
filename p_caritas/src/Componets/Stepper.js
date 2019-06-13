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
class Stepper extends Component {

    constructor(props){
        super(props);
        this.state={
            steps: 1, Nombre: '', PrimerA: '', SegundoA: '', NumeroIdent: '', Direccion: '', 
            Localidad: '', Departamento:'', Telefono:'', Date:'', EstadoCivil:'', Genero:'', 
            Edad:'', Oficio:'', Educacion:'', EstadoOcupacion:'', Remision:'', Parroquia:'', 
            Colonia:'', TipoCaso:'',Tratamiento:'',NumeroEx:'',EstadoAtencion:'',Terapeuta:'',
            VPsicologica:'',VFisica:'',VEconomica:'',VSexual:'',Victima:'',Agresor:'',RPT:'',
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
        const {NombreD,PrimerAD ,SegundoAD ,NumeroIdentD ,DireccionD ,LocalidadD ,DepartamentoD,EstadoCivilD,OficioD,TelefonoD,DateD,
            Nombre,PrimerA ,SegundoA ,NumeroIdent ,Direccion ,Localidad ,Departamento,Telefono,Date,EstadoCivil,
            Genero,Oficio,Educacion,EstadoOcupacion,Remision,Parroquia,Colonia,TipoCaso,Tratamiento,NumeroEx,
            EstadoAtencion,Terapeuta,VPsicologica,VFisica,VEconomica,VSexual,Victima,Agresor,RPT,Ninos,Ninas,Otros
        }=this.state;
        const vals={NombreD,PrimerAD ,SegundoAD ,NumeroIdentD ,DireccionD ,LocalidadD ,DepartamentoD,EstadoCivilD,OficioD,TelefonoD,DateD,
            Nombre,PrimerA ,SegundoA ,NumeroIdent ,Direccion ,Localidad ,Departamento,Telefono,Date,EstadoCivil,
            Genero,Oficio,Educacion,EstadoOcupacion,Remision,Parroquia,Colonia,TipoCaso,Tratamiento,NumeroEx,
            EstadoAtencion,Terapeuta,VPsicologica,VFisica,VEconomica,VSexual,Victima,Agresor,RPT,Ninos,Ninas,Otros
        };
    
        switch(this.state.steps){
        case 1:
        return (
                <div>
                    <Bar/>
                   
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

export default Stepper
