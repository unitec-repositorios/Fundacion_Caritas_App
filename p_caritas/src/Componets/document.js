/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import html2canvas from 'html2canvas';
import './ficha_usuarios.css';
import Button from '@material-ui/core/Button';
import * as jsPDF from 'jspdf';
import axios from 'axios';

let cant=0;
let vpsicologica='';
let vfisica='';
let veconomica='';
let vsexual='';
let vurbana = '';
let vrural = '';
let causaEconomica = '';
let causaAlcohol = '';
let causaInfiel = '';
let victima= '';
let agresor = '';

const port = 'https://apicaritas.herokuapp.com/';

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
        axios.post(port+'/api/casos/'+case_number+'/'+patient_id+'/'+
        remission_id+'/'+violence_type_id+'/'+condition_id+'/'+cause_id+'/'+location_violence_id+
        '/'+city_id+'/'+state_id+'/'+benefitted_amount).catch(e=>{console.log(e)}) 
    
}

export class Form3 extends Component {
 
   back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }

    generarPdf = () =>{
        createCase(this.props.vals);
        
        const input  = document.getElementById("imprimir");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p', 'mm', 'legal');
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('Ficha_Paciente.pdf'); 
        });
    }
    componentWillMount=()=>{
        let ninos,ninas,otros;
        if(this.props.vals.VPsicologica){
            vpsicologica=" Psicologica ";
        }
        if(this.props.vals.VEconomica){
            veconomica=" Economica ";
        }        
        if(this.props.vals.VFisica){
            vfisica="Fisica";
        }
        if(this.props.vals.VSexual){
            vsexual="Sexual";
        }
        if(this.props.vals.Ninos==='')
            { ninos = 0;}
        else    
            {ninos = parseInt(this.props.vals.Ninos);}
        if(this.props.vals.Ninas==='')
        {  ninas =0;}
        else 
            { ninas = parseInt(this.props.vals.Ninas);}
        if(this.props.vals.Otros==='')
            { otros = 0;}    
        else
            { otros = parseInt(this.props.vals.Otros);}
        if(this.props.vals.VUrbana){
            vurbana = "Urbana";
        }
        if(this.props.vals.VRural)
            vrural = "Rural";
        if (this.props.vals.CEconomica)
            causaEconomica = "Economica";
        if(this.props.vals.CAlcoholismo)
            causaAlcohol = 'Alcholimos';
        if(this.props.vals.CInfidelidad)
            causaInfiel = 'Infidelidad';
        if(this.props.vals.Victima)
            victima = 'Victima';
        if(this.props.vals.Agresor)
            agresor = 'Agresor';
        cant = ninos + ninas + otros;

        console.log("cantidad es: " + cant + 'Ninos '+otros);
    }
    
    render() {
        const {vals}=this.props;

        function getDate() {
            const today = new Date(),
            date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            return date;
        }
        const fechaActual = getDate();

        return (
            <div>
                <div className = "g34"> 
                    <Button color="secondary" variant="outlined" onClick={this.back}>Regresar</Button><Button  color="primary" variant="outlined" onClick={this.generarPdf}>Imprimir</Button>
                </div>
                <div id = "imprimir" className="c26">
                    <p className="c10"><span className="c3">CARITAS DE SAN PEDRO SULA</span></p>
                    <p className="c10 c19"><span className="c11"></span></p>
                    <p className="c24"><span className="c14">SOLICITUD DE ASISTENCIA PSICOL&Oacute;GICA GRATUITA EN CASOS DE VIOLENCIA DOM&Eacute;STICA</span></p>
                    <p className="c18"><span className="c14"></span></p>
                    <p className="c24"><span className="c17">Con la finalidad de acreditar la concurrencia de los requisitos legales exigidos por Caritas de San Pedro Sula para el goce de apoyo psicol&oacute;gico gratuito, declaro que los datos que relaciono a continuaci&oacute;n son ciertos, completos y sin omisi&oacute;n alguna.</span></p>
                    <p className="c5 c19"><span className="c17"></span></p>
                    <p className="c5"><span className="c11">1. Datos Personales&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fecha de recepci&oacute;n: {fechaActual}</span></p>
                    <p className="c5"><span className="c11">A) Beneficiario (a)</span></p>
                    
                    <table className="c16">
                        <tbody>
                            <tr className="c9">
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">NOMBRE</span></p>
                                    <p className="c13"><span className="c7">{vals.Nombre}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">PRIMER APELLIDO</span></p>
                                    <p className="c13"><span className="c7">{vals.PrimerA}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">SEGUNDO APELLIDO</span></p>
                                    <p className="c13"><span className="c7">{vals.SegundoA}</span></p>
                                </td>
                            </tr>
                            <tr className="c9">
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">N&Uacute;MERO DE IDENTIDAD</span></p>
                                    <p className="c13"><span className="c7">{vals.NumeroIdent}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">DIRECCI&Oacute;N</span></p>
                                    <p className="c13"><span className="c7">{vals.Direccion}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">LOCALIDAD</span></p>
                                    <p className="c13"><span className="c7">{vals.Localidad}</span></p>
                                </td>
                            </tr>
                            <tr className="c9">
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">DEPARTAMENTO</span></p>
                                    <p className="c13"><span className="c7">{vals.Departamento}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">TEL&Eacute;FONO</span></p>
                                    <p className="c13"><span className="c7">{vals.Telefono}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">FECHA DE NACIMIENTO</span></p>
                                    <p className="c13"><span className="c7">{vals.Date}</span></p>
                                </td>
                            </tr>
                            <tr className="c9">
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">ESTADO CIVIL</span></p>
                                    <p className="c13"><span className="c7">{vals.EstadoCivil}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">PROFESI&Oacute;N</span></p>
                                    <p className="c13"><span className="c7">{vals.Oficio}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">TIPO DE EDUCACI&Oacute;N</span></p>
                                    <p className="c13"><span className="c7">{vals.Educacion}</span></p>
                                </td>
                            </tr>
                            <tr className="c9">
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">CANTIDAD BENEFICIARIOS</span></p>
                                    <p className="c13"><span className="c7">{cant}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">CAUSA DE VIOLENCIA</span></p>
                                    <p className="c13"><span className="c7">{causaAlcohol} {causaEconomica} {causaInfiel}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c15">UBICACI&Oacute;N DE LA VIOLENCIA</span></p>
                                    <p className="c13"><span className="c7">{vurbana} {vrural}</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="c5 c19"><span className="c3"></span></p>
                    <p className="c5"><span className="c11">B) Denunciado (a)</span></p>

                    <table className="c16">
                        <tbody>
                            <tr className="c9">
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">NOMBRE</span></p>
                                    <p className="c13"><span className="c7">{vals.NombreD}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">PRIMER APELLIDO</span></p>
                                    <p className="c13"><span className="c7">{vals.PrimerAD}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">SEGUNDO APELLIDO</span></p>
                                    <p className="c13"><span className="c7">{vals.SegundoAD}</span></p>
                                </td>
                            </tr>
                            <tr className="c9">
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">N&Uacute;MERO DE IDENTIDAD</span></p>
                                    <p className="c13"><span className="c7">{vals.NumeroIdentD}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">DIRECCI&Oacute;N</span></p>
                                    <p className="c13"><span className="c7">{vals.DireccionD}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">LOCALIDAD</span></p>
                                    <p className="c13"><span className="c7">{vals.LocalidadD}</span></p>
                                </td>
                            </tr>
                            <tr className="c9">
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">DEPARTAMENTO</span></p>
                                    <p className="c13"><span className="c7">{vals.DepartamentoD}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">TEL&Eacute;FONO</span></p>
                                    <p className="c13"><span className="c7">{vals.TelefonoD}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">FECHA DE NACIMIENTO</span></p>
                                    <p className="c13"><span className="c7">{vals.DateD}</span></p>
                                </td>
                            </tr>
                            <tr className="c9">
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">ESTADO CIVIL</span></p>
                                    <p className="c13"><span className="c7">{vals.EstadoCivilD}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">PROFESI&Oacute;N</span></p>
                                    <p className="c13"><span className="c7">{vals.OficioD}</span></p>
                                </td>
                                <td className="c6" colSpan="2" rowSpan="1">
                                    <p className="c2"><span className="c8">TIPO DE EDUCACI&Oacute;N</span></p>
                                    <p className="c13"><span className="c7">{vals.EducacionD}</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="c5 c19"><span className="c3"></span></p>
                    <p className="c5"><span className="c11">2. Datos Econ&oacute;micos </span></p>
                    <p className="c5"><span className="c11">A) Ingresos Mensuales por unidad familiar</span></p>
                    <p className="c5 c19"><span className="c3"></span></p>
                    <table className="c16">
                        <tbody>
                            <tr className="c22">
                                <td className="c12" colSpan="1" rowSpan="1">
                                    <p className="c2"><span className="c14">IMPORTE BRUTO</span></p>
                                </td>
                                <td className="c12" colSpan="1" rowSpan="1">
                                    <p className="c2"><span className="c14">CONCEPTO</span></p>
                                </td>
                            </tr>
                            <tr className="c25">
                                <td className="c12" colSpan="1" rowSpan="1">
                                    <input className = "inputText" type="text" name="Importe" />
                                </td>
                                <td className="c12" colSpan="1" rowSpan="1">
                                    <input className = "inputText" type="text" name="Importe" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="c5 c19"><span className="c3"></span></p>
                    <table className="c16">
                        <tbody>
                            <tr className="c22">
                                <td className="c21" colSpan="1" rowSpan="1">
                                    <p className="c2"><span className="c14">DESCRIPCI&Oacute;N DE ATENCI&Oacute;N PSICOL&Oacute;GICA</span></p>
                                    <p className="c13"><span className="c7">Remitido de: {vals.Remision}</span></p>
                                    <p className="c13"><span className="c7">Tipo de Violencia: {vpsicologica} {vfisica} {veconomica} {vsexual} </span></p>
                                    <p className="c13"><span className="c7">Condici&oacute;n de la persona: {victima} {agresor} </span></p>
                                </td>
                            </tr>
                            <tr className="c20">
                                <td className="c21" colSpan="1" rowSpan="1">
                                    <p className="c2"><span className="c14">NOMBRE, APELLIDOS</span></p>
                                    <p className="c13"><span className="c7">{vals.Nombre}&nbsp;{vals.PrimerA}&nbsp;{vals.SegundoA}</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="c5 c19"><span className="c3"></span></p>
                    <p className="c5"><span className="c11">DECLARO SABER QUE:</span></p>
                    <ol className="c23 lst-kix_ukewq6o6x8b9-0 start" start="1">
                        <li className="c5 c27"><span className="c17">Mis datos de car&aacute;cter personal ser&aacute;n incluidos en un fichero manejado por la Instituci&oacute;n para efectos de registro e investigaci&oacute;n.</span></li>
                        <li className="c5 c27"><span className="c17">Que la instituci&oacute;n no es responsable de contactarme para el cumplimiento del proceso, esa responsabilidad recae en m&iacute;, para hacer las gestiones necesarias para iniciar dicho tr&aacute;mite.</span></li>
                    </ol>
                    <p className="c5 c19"><span className="c17"></span></p>
                    <p className="c5 c19"><span className="c17"></span></p>
                    <p className="c5 c19"><span className="c17"></span></p>
                    <p className="c10"><span className="c17">____________________________________________________</span></p>
                    <p className="c10"><span className="c17">(Firma)</span></p>
                </div>
            </div>
        
        );
    }
}

export default Form3
