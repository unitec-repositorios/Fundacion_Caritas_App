/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './ficha_usuarios.css';
import Button from '@material-ui/core/Button';

export class Form3 extends Component {
 
   back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {vals}=this.props;
        return (
            <div class="c47">
                  <Button  color="secondary" variant="outlined" onClick={this.back}>Regresar</Button><Button  color="primary" variant="outlined" onClick={this.back}>Imprimir</Button>
                  
                <div>
                    <p class="c11"><span class="c43">CARITAS DE SAN PEDRO SULA</span></p>
                    <p class="c0 c3"><span class="c6 c33"></span></p>
                </div>
                <p class="c11"><span class="c14">SOLICITUD DE ASISTENCIA PSICOLOGICA GRATUITA EN CASOS DE VIOLENCIA DOMESTICA </span></p>
                <p class="c11 c3"><span class="c6 c1"></span></p>
                <p class="c0"><span class="c6 c1">Con la finalidad de acreditar la concurrencia de los requisitos legales exigidos por Caritas de San Pedro Sula para el goce de apoyo psicol&oacute;gico gratuito, declaro que los datos que relaciono a continuaci&oacute;n son ciertos, completos y sin omisi&oacute;n alguna.</span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0"><span class="c14">1.- Datos personales &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fecha de recepci&oacute;n: _______________________________</span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0" id="h.gjdgxs"><span class="c14">A) BENEFICIARIA (O) &nbsp;</span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <a id="t.42ce1ccee988b3c7d7220039a6232d7304771c4f"></a>
                <a id="t.0"></a>
                <table class="c23">
                    <tbody>
                        <tr class="c8">
                            <td class="c12" colspan="1" rowspan="1">
                                <p class="c0"><span class="c6 c1">NOMBRE</span></p>
                                <p class="c0"><span class="c6 c1">{vals.Nombre}</span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c36" colspan="3" rowspan="1">
                                <p class="c0"><span class="c6 c1">PRIMER APELLIDO</span></p>
                                <p class="c0"><span class="c6 c1">{vals.PrimerA} </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c37" colspan="3" rowspan="1">
                                <p class="c0"><span class="c6 c1">SEGUNDO APELLIDO</span></p>
                                <p class="c0"><span class="c6 c1">{vals.SegundoA} </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c38" colspan="1" rowspan="1">
                                <p class="c0"><span class="c6 c1">N&Uacute;MERO DE IDENTIDAD </span></p>
                                <p class="c0"><span class="c6 c1">{vals.NumeroIdent} </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                        </tr>
                        <tr class="c8">
                            <td class="c28" colspan="5" rowspan="1">
                                <p class="c0"><span class="c6 c1">DIRECCI&Oacute;N</span></p>
                                <p class="c0"><span class="c6 c1">{vals.Direccion} </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c22" colspan="3" rowspan="1">
                                <p class="c0"><span class="c6 c1">LOCALIDAD</span></p>
                                <p class="c0"><span class="c6 c1">{vals.Localidad} </span></p> 
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                        </tr>
                        <tr class="c8">
                            <td class="c42" colspan="3" rowspan="1">
                                <p class="c0"><span class="c6 c1">DEPARTAMENTO </span></p>
                                <p class="c0"><span class="c6 c1">{vals.Departamento} </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c7" colspan="3" rowspan="1">
                                <p class="c0"><span class="c6 c1">TEL&Eacute;FONO</span></p>
                                <p class="c0"><span class="c6 c1">{vals.Telefono} </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c26" colspan="2" rowspan="1">
                                <p class="c0"><span class="c6 c1">FECHA DE NACIMIENTO</span></p>
                                <p class="c0"><span class="c6 c1">{vals.Date} </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                        </tr>
                        <tr class="c8">
                            <td class="c32" colspan="2" rowspan="1">
                                <p class="c0"><span class="c6 c1">ESTADO CIVIL </span></p>
                                <p class="c0"><span class="c6 c1">{vals.EstadoCivil} </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c40" colspan="6" rowspan="1">
                                <p class="c0"><span class="c6 c1">PROFESI&Oacute;N</span></p>
                                <p class="c0"><span class="c6 c1">{vals.Oficio} </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0"><span class="c14">B) DENUNCIADO </span></p>
                <a id="t.fbd10b640194621b18a4328d169314d8e3af9f6c"></a>
                <a id="t.1"></a>
                <table class="c23">
                    <tbody>
                        <tr class="c8">
                            <td class="c12" colspan="1" rowspan="1">
                                <p class="c0"><span class="c6 c1">NOMBRE</span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c12" colspan="2" rowspan="1">
                                <p class="c0"><span class="c6 c1">PRIMER APELLIDO</span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c37" colspan="2" rowspan="1">
                                <p class="c0"><span class="c6 c1">SEGUNDO APELLIDO</span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c16" colspan="1" rowspan="1">
                                <p class="c0"><span class="c6 c1">N&Uacute;MERO DE IDENTIDAD </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                        </tr>
                        <tr class="c8">
                            <td class="c46" colspan="4" rowspan="1">
                                <p class="c0"><span class="c6 c1">DIRECCI&Oacute;N</span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c22" colspan="2" rowspan="1">
                                <p class="c0"><span class="c6 c1">LOCALIDAD</span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                        </tr>
                        <tr class="c8">
                            <td class="c45" colspan="3" rowspan="1">
                                <p class="c0"><span class="c6 c1">DEPARTAMENTO </span></p>
                                <p class="c0 c3"><span class="c1 c6"></span></p>
                            </td>
                            <td class="c2" colspan="1" rowspan="1">
                                <p class="c0"><span class="c6 c1">TEL&Eacute;FONO</span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c22" colspan="2" rowspan="1">
                                <p class="c0"><span class="c6 c1">FECHA DE NACIMIENTO</span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                        </tr>
                        <tr class="c8">
                            <td class="c15" colspan="2" rowspan="1">
                                <p class="c0"><span class="c6 c1">ESTADO CIVIL </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c39" colspan="4" rowspan="1">
                                <p class="c0"><span class="c6 c1">PROFESI&Oacute;N </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c14"></span></p>
                <p class="c0 c3"><span class="c6 c14"></span></p>
                <p class="c0 c3"><span class="c6 c14"></span></p>
                <p class="c0 c3"><span class="c6 c14"></span></p>
                <p class="c0 c3"><span class="c6 c14"></span></p>
                <p class="c0 c3"><span class="c6 c14"></span></p>
                <p class="c0"><span class="c14">2.- Datos econ&oacute;micos</span></p>
                <p class="c0"><span class="c14">A) INGRESOS MENSUALES POR UNIDAD FAMILIAR</span></p>
                <a id="t.3e94ec758df7214fbd13b26ddc6e04f316937370"></a>
                <a id="t.2"></a>
                <table class="c21">
                    <tbody>
                        <tr class="c8">
                            <td class="c4" colspan="1" rowspan="1">
                                <p class="c11"><span class="c6 c1">Importe bruto</span></p>
                            </td>
                            <td class="c4" colspan="1" rowspan="1">
                                <p class="c11"><span class="c1">Concepto </span><sup class="c1 c41"><a href="#ftnt1" id="ftnt_ref1">[1]</a></sup><span class="c6 c1">4)</span></p>
                            </td>
                        </tr>
                        <tr class="c13">
                            <td class="c4" colspan="1" rowspan="1">
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                            <td class="c4" colspan="1" rowspan="1">
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <a id="t.3b5c2538bcf182abdfeab0494286daae65dc0d1c"></a>
                <a id="t.3"></a>
                <table class="c21">
                    <tbody>
                        <tr class="c8">
                            <td class="c31" colspan="1" rowspan="1">
                                <p class="c0"><span class="c14">&nbsp;Descripci&oacute;n de Atenci&oacute;n Psicol&oacute;gica:</span></p>
                                <p class="c0"><span class="c6 c1">DESCRIPCI&Oacute;N DEL CASO: </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                                <p class="c0"><span class="c6 c1">Remitido de JEVD-EXP-VD XXXX</span></p>
                                <p class="c0"><span class="c6 c1">TIPO DE VIOLENCIA:{vals.VFisica} {vals.VEconomica} {vals.VSexual} </span></p>
                                <p class="c0"><span class="c6 c1">CONDICIÓN: {vals.Victima} {vals.Agresor}  </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                        </tr>
                        <tr class="c8">
                            <td class="c31" colspan="1" rowspan="1">
                                <p class="c0"><span class="c6 c1">NOMBRE, APELLIDOS: {vals.Nombre} &nbsp; {vals.PrimerA} &nbsp; {vals.SegundoA} </span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                                <p class="c0 c3"><span class="c6 c1"></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0"><span class="c14">DECLARO SABER QUE:</span></p>
                <ol class="c27 lst-kix_list_1-0 start" start="1">
                    <li class="c0 c29"><span class="c6 c1">Mis datos de car&aacute;cter personal ser&aacute;n incluidos en un fichero manejado por la Instituci&oacute;n para efectos de registro e investigaci&oacute;n.</span></li>
                    <li class="c0 c29"><span class="c6 c1">Que la instituci&oacute;n no es responsable de contactarme para el cumplimiento del proceso, esa responsabilidad recae en m&iacute;, para hacer las gestiones necesarias para iniciar dicho tr&aacute;mite.</span></li>
                </ol>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c0 c3"><span class="c6 c1"></span></p>
                <p class="c11 c3"><span class="c6 c20"></span></p>
                <p class="c11 c3"><span class="c6 c20"></span></p>
                <p class="c3 c11"><span class="c6 c20"></span></p>
                <p class="c11 c3"><span class="c6 c20"></span></p>
                <p class="c11"><span class="c6 c20">____________________________________________________</span></p>
                <p class="c11"><span class="c6 c20">(Firma)</span></p>
            </div>
        )
    }
}

export default Form3
