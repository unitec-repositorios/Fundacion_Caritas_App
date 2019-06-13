/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import html2canvas from 'html2canvas';
import './ficha_usuarios.css';
import Button from '@material-ui/core/Button';
import * as jsPDF from 'jspdf';

export class Form3 extends Component {
 
   back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }

    //  pxToMm = (px) => {
    //     return Math.floor(px/document.getElementById('imprimir').offsetHeight);
    //   };
      
    //  mmToPx = (mm) => {
    //     return document.getElementById('imprimir').offsetHeight*mm;
    //   };

    generarPdf = () =>{
        const input  = document.getElementById("imprimir");
        // const pxToMm = Math.floor(input/document.getElementById("imprimir").offsetHeight);
        // const inputHeightMm = pxToMm;
        // const a4WidthMm = 210;
        // const a4HeightMm = 297; 
        // const a4HeightPx = mmToPx(a4HeightMm); 
        
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p', 'mm', 'legal');
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('Ficha_Paciente.pdf'); 
        });
    }
                           
    render() {
        const {vals}=this.props;
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
                    <p class="c5"><span class="c11">1. Datos Personales&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fecha de recepci&oacute;n:</span></p>
                    <p class="c5"><span class="c11">A) Beneficiario (a)</span></p>
                    <a id="t.d86e859a5c1d334867d8bfd47dd17184fce41e1a"></a>
                    <a id="t.0"></a>
                    <table class="c16">
                        <tbody>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">NOMBRE</span></p>
                                    <p class="c0"><span class="c1"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">PRIMER APELLIDO</span></p>
                                    <p class="c0"><span class="c1"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">SEGUNDO APELLIDO</span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">N&Uacute;MERO DE IDENTIDAD</span></p>
                                    <p class="c0"><span class="c1"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">DIRECCI&Oacute;N</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">LOCALIDAD</span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">DEPARTAMENTO</span></p>
                                    <p class="c0"><span class="c1"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">TEL&Eacute;FONO</span></p>
                                    <p class="c0"><span class="c8"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">FECHA DE NACIMIENTO</span></p>
                                    <p class="c0"><span class="c8"></span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">ESTADO CIVIL</span></p>
                                    <p class="c0"><span class="c1"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">PROFESI&Oacute;N</span></p>
                                    <p class="c0"><span class="c1"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">TIPO DE EDUCACI&Oacute;N</span></p>
                                    <p class="c0"><span class="c1"></span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">CANTIDAD BENEFICIARIOS</span></p>
                                    <p class="c0"><span class="c1"></span></p>
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
                                    <p class="c0"><span class="c1"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">PRIMER APELLIDO</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">SEGUNDO APELLIDO</span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">N&Uacute;MERO DE IDENTIDAD</span></p>
                                    <p class="c0"><span class="c1"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">DIRECCI&Oacute;N</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">LOCALIDAD</span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">DEPARTAMENTO</span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">TEL&Eacute;FONO</span></p>
                                    <p class="c0"><span class="c8"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">FECHA DE NACIMIENTO</span></p>
                                    <p class="c0"><span class="c8"></span></p>
                                </td>
                            </tr>
                            <tr class="c9">
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">ESTADO CIVIL</span></p>
                                    <p class="c0"><span class="c1"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">PROFESI&Oacute;N</span></p>
                                    <p class="c0"><span class="c1"></span></p>
                                </td>
                                <td class="c6" colspan="2" rowspan="1">
                                    <p class="c2"><span class="c8">TIPO DE EDUCACI&Oacute;N</span></p>
                                    <p class="c0"><span class="c1"></span></p>
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
                                    <p class="c0"><span class="c7"></span></p>
                                </td>
                                <td class="c12" colspan="1" rowspan="1">
                                    <p class="c0"><span class="c14"></span></p>
                                    <p class="c0"><span class="c7"></span></p>
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
                                    <p class="c13"><span class="c7">Remitido de:</span></p>
                                    <p class="c13"><span class="c7">Tipo de Violencia:</span></p>
                                    <p class="c13"><span class="c7">Condici&oacute;n de la persona:</span></p>
                                </td>
                            </tr>
                            <tr class="c20">
                                <td class="c21" colspan="1" rowspan="1">
                                    <p class="c2"><span class="c14">NOMBRE, APELLIDOS</span></p>
                                    <p class="c0"><span class="c7"></span></p>
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
