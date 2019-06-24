/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import html2canvas from 'html2canvas';
import './ficha_usuarios.css';
import Button from '@material-ui/core/Button';
import * as jsPDF from 'jspdf';
import { number } from 'prop-types';

let cant=0;
let vpsicologica='';
let vfisica='';
let veconomica='';
let vsexual='';

export class Form3 extends Component {
 
   back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }

    generarPdf = () =>{
        const input  = document.getElementById("imprimir");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p', 'mm', 'legal');
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('Ficha_Paciente.pdf'); 
        });
    }
    componentWillMount=()=>{
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
    {var ninos = 0;}
else    
    {var ninos = parseInt(this.props.vals.Ninos);}
if(this.props.vals.Ninas==='')
   { var ninas =0;}
else 
    {var ninas = parseInt(this.props.vals.Ninas);}
if(this.props.vals.Otros==='')
    {var otros = 0;}    
else
    {var otros = parseInt(this.props.vals.Otros);}
 
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
                <div class = "g34"> 
                    <Button color="secondary" variant="outlined" onClick={this.back}>Regresar</Button><Button  color="primary" variant="outlined" onClick={this.generarPdf}>Imprimir</Button>
                </div>
                <div id = "imprimir" class="c26">
                    <p class="c10"><span class="c3">CARITAS DE SAN PEDRO SULA</span></p>
                    <p class="c10 c19"><span class="c11"></span></p>
                    <p class="c24"><span class="c14">SOLICITUD DE ASISTENCIA PSICOL&Oacute;GICA GRATUITA EN CASOS DE VIOLENCIA DOM&Eacute;STICA</span></p>
                    <p class="c18"><span class="c14"></span></p>
                    <p class="c24"><span class="c17">Con la finalidad de acreditar la concurrencia de los requisitos legales exigidos por Caritas de San Pedro Sula para el goce de apoyo psicol&oacute;gico gratuito, declaro que los datos que relaciono a continuaci&oacute;n son ciertos, completos y sin omisi&oacute;n alguna.</span></p>
                    <p class="c5 c19"><span class="c17"></span></p>
                    <p class="c5"><span class="c11">1. Datos Personales&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fecha de recepci&oacute;n: {fechaActual}</span></p>
                    <p class="c5"><span class="c11">A) Beneficiario (a)</span></p>
                    <a id="t.d86e859a5c1d334867d8bfd47dd17184fce41e1a"></a>
                    <a id="t.0"></a>
                    <table class="c16">
                        <tbody>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">NOMBRE</span></p>
                                    <p class="c13"><span class="c7">{vals.Nombre}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">PRIMER APELLIDO</span></p>
                                    <p class="c13"><span class="c7">{vals.PrimerA}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">SEGUNDO APELLIDO</span></p>
                                    <p class="c13"><span class="c7">{vals.SegundoA}</span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">N&Uacute;MERO DE IDENTIDAD</span></p>
                                    <p class="c13"><span class="c7">{vals.NumeroIdent}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">DIRECCI&Oacute;N</span></p>
                                    <p class="c13"><span class="c7">{vals.Direccion}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">LOCALIDAD</span></p>
                                    <p class="c13"><span class="c7">{vals.Localidad}</span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">DEPARTAMENTO</span></p>
                                    <p class="c13"><span class="c7">{vals.Departamento}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">TEL&Eacute;FONO</span></p>
                                    <p class="c13"><span class="c7">{vals.Telefono}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">FECHA DE NACIMIENTO</span></p>
                                    <p class="c13"><span class="c7">{vals.Date}</span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">ESTADO CIVIL</span></p>
                                    <p class="c13"><span class="c7">{vals.EstadoCivil}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">PROFESI&Oacute;N</span></p>
                                    <p class="c13"><span class="c7">{vals.Oficio}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">TIPO DE EDUCACI&Oacute;N</span></p>
                                    <p class="c13"><span class="c7">{vals.Educacion}</span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">CANTIDAD BENEFICIARIOS</span></p>
                                    <p class="c13"><span class="c7">{cant}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">CAUSA DE VIOLENCIA</span></p>
                                    <p class="c0"><span class="c8"></span></p>
                                    <p class="c0"><span class="c8"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c15">UBICACI&Oacute;N DE LA VIOLENCIA</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="c5 c19"><span class="c3"></span></p>
                    <p class="c5"><span class="c11">B) Denunciado (a)</span></p>
                    <a id="t.cd9ed001c7ab7e14bf6c30b597e61596ac2aae18"></a>
                    <a id="t.1"></a>
                    <table class="c16">
                        <tbody>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">NOMBRE</span></p>
                                    <p class="c13"><span class="c7">{vals.NombreD}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">PRIMER APELLIDO</span></p>
                                    <p class="c13"><span class="c7">{vals.PrimerAD}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">SEGUNDO APELLIDO</span></p>
                                    <p class="c13"><span class="c7">{vals.SegundoAD}</span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">N&Uacute;MERO DE IDENTIDAD</span></p>
                                    <p class="c13"><span class="c7">{vals.NumeroIdentD}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">DIRECCI&Oacute;N</span></p>
                                    <p class="c13"><span class="c7">{vals.DireccionD}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">LOCALIDAD</span></p>
                                    <p class="c13"><span class="c7">{vals.LocalidadD}</span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">DEPARTAMENTO</span></p>
                                    <p class="c13"><span class="c7">{vals.DepartamentoD}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">TEL&Eacute;FONO</span></p>
                                    <p class="c13"><span class="c7">{vals.TelefonoD}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">FECHA DE NACIMIENTO</span></p>
                                    <p class="c13"><span class="c7">{vals.DateD}</span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">ESTADO CIVIL</span></p>
                                    <p class="c13"><span class="c7">{vals.EstadoCivilD}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">PROFESI&Oacute;N</span></p>
                                    <p class="c13"><span class="c7">{vals.OficioD}</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">TIPO DE EDUCACI&Oacute;N</span></p>
                                    <p class="c13"><span class="c7">{vals.EducacionD}</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="c5 c19"><span class="c3"></span></p>
                    <p class="c5"><span class="c11">2. Datos Econ&oacute;micos </span></p>
                    <p class="c5"><span class="c11">A) Ingresos Mensuales por unidad familiar</span></p>
                    <p class="c5 c19"><span class="c3"></span></p>
                    <a id="t.2223e35d945286bda65bdd5d75a79e80383a2cfa"></a>
                    <a id="t.2"></a>
                    <table class="c16">
                        <tbody>
                            <tr class="c22">
                                <td class="c12" colspan="1" rowspan="1">
                                    <p class="c2"><span class="c14">IMPORTE BRUTO</span></p>
                                </td>
                                <td class="c12" colspan="1" rowspan="1">
                                    <p class="c2"><span class="c14">CONCEPTO</span></p>
                                </td>
                            </tr>
                            <tr class="c25">
                                <td class="c12" colspan="1" rowspan="1">
                                    <input class = "inputText" type="text" name="Importe" />
                                </td>
                                <td class="c12" colspan="1" rowspan="1">
                                    <input class = "inputText" type="text" name="Importe" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="c5 c19"><span class="c3"></span></p>
                    <a id="t.5a944f3f52af2d3a3cc57f662423c0ea88feb0fb"></a>
                    <a id="t.3"></a>
                    <table class="c16">
                        <tbody>
                            <tr class="c22">
                                <td class="c21" colspan="1" rowspan="1">
                                    <p class="c2"><span class="c14">DESCRIPCI&Oacute;N DE ATENCI&Oacute;N PSICOL&Oacute;GICA</span></p>
                                    <p class="c13"><span class="c7">Remitido de: {vals.Remision}</span></p>
                                    <p class="c13"><span class="c7">Tipo de Violencia: {vpsicologica} {vfisica} {veconomica} {vsexual} </span></p>
                                    <p class="c13"><span class="c7">Condici&oacute;n de la persona: {vals.Victima} {vals.Agresor} </span></p>
                                </td>
                            </tr>
                            <tr class="c20">
                                <td class="c21" colspan="1" rowspan="1">
                                    <p class="c2"><span class="c14">NOMBRE, APELLIDOS</span></p>
                                    <p class="c13"><span class="c7">{vals.Nombre}&nbsp;{vals.PrimerA}&nbsp;{vals.SegundoA}</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="c5 c19"><span class="c3"></span></p>
                    <p class="c5"><span class="c11">DECLARO SABER QUE:</span></p>
                    <ol class="c23 lst-kix_ukewq6o6x8b9-0 start" start="1">
                        <li class="c5 c27"><span class="c17">Mis datos de car&aacute;cter personal ser&aacute;n incluidos en un fichero manejado por la Instituci&oacute;n para efectos de registro e investigaci&oacute;n.</span></li>
                        <li class="c5 c27"><span class="c17">Que la instituci&oacute;n no es responsable de contactarme para el cumplimiento del proceso, esa responsabilidad recae en m&iacute;, para hacer las gestiones necesarias para iniciar dicho tr&aacute;mite.</span></li>
                    </ol>
                    <p class="c5 c19"><span class="c17"></span></p>
                    <p class="c5 c19"><span class="c17"></span></p>
                    <p class="c5 c19"><span class="c17"></span></p>
                    <p class="c10"><span class="c17">____________________________________________________</span></p>
                    <p class="c10"><span class="c17">(Firma)</span></p>
                </div>
            </div>
        
        );
    }
}

export default Form3
