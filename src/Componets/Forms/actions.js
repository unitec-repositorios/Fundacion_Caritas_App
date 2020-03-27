import axios from "axios";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";
const format = require("../../JSON_Formats");
const port = "http://localhost:3001/api";

export const savePatients = async params => {
  const id = params.vals.NumeroIdent;
  const name = params.vals.Nombre;
  const last_name = params.vals.PrimerA + " " + params.vals.SegundoA;
  const current_year = new Date();
  const birth_year = new Date(params.vals.Date);
  const age = current_year.getFullYear() - birth_year.getFullYear();
  const gender = params.vals.Genero;
  const state = params.vals.EstadoCivil;
  const profession = params.vals.Oficio;
  let IdExiste = params.vals.IdExiste;
  let departamento = Number(params.vals.Departamento); // Imitando el codigo chancho de mis compañeros xd

  /*Importante
  Por favor refactoricen estos formularios
  */

  console.log("Refactorizar urgentemente");

  let education_id = 0;
  switch (params.vals.Educacion) {
    case "s-completa":
      education_id = 7;
      break;
    case "s-incompleta":
      education_id = 6;
      break;
    case "b-completa":
      education_id = 5;
      break;
    case "b-incompleta":
      education_id = 4;
      break;
    case "pb-completa":
      education_id = 3;
      break;
    case "pb-incompleta":
      education_id = 2;
      break;
    default:
      education_id = 1;
  }
  education_id = Number(params.vals.Educacion);

  const mun = params.Parroquia;
  let city_id = 0;
  switch (mun) {
    case "sps":
      city_id = 1;
      break;
    case "lima":
      city_id = 2;
      break;
    default:
      city_id = 4;
  }

  let occupancy_state = 0;
  occupancy_state = Number(params.vals.EstadoOcupacion);
  console.log("Soy el IdExiste");
  console.log(IdExiste);
  if (IdExiste == -1) {
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
        departamento
      );

      var response = await axios
        .post(port + "/paciente/", body, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(res => {
          const id_paciente = res.data[0].IDPACIENTE;
          IdExiste = id_paciente;
          createCase(params, id_paciente);
          let usuario = localStorage.getItem("user");
          postUsuarioCreacion(usuario,id_paciente);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      var body = {
        identidad: id,
        nombres: name,
        apellidos: last_name,
        edad: age,
        genero: gender,
        oficio: profession,
        id_estadoc: parseInt(state),
        id_estado: occupancy_state,
        id_educacion: education_id,
        id_departamento: departamento
      };

      var response = await axios
        .put(port + "/paciente/update/" + IdExiste, body, {
          headers: {
            "content-type": "application/json"
          }
        })
        .then(res => {
          //const id_paciente = res.data[0].IDPACIENTE;
          console.log(res);
          updateCaso(params, IdExiste); //updateCaso
          let usuario = localStorage.getItem("user");
          postUsuarioModifico(usuario,IdExiste);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return IdExiste;
};

export const generarPdf = props => {
  createCase(props);

  const input = document.getElementById("imprimir");
  html2canvas(input).then(canvas => {
    const imgData = canvas.toDataURL("img/png");
    const pdf = new jsPDF("p", "mm", "legal");
    pdf.addImage(imgData, "PNG", 0, 0);
    /*pdf.autoPrint();
    pdf.output("dataurlnewwindow");*/
    pdf.save("Ficha_Paciente.pdf");
  });
  savePatients(props);
};

const createCase = (params, patient_id) => {
  const case_number = params.vals.NumeroEx;
  const remission_id = params.vals.Remision;
  // const municipal_resource_id = params.vals.AccesoJusticia;
  const mun = params.vals.Parroquia;
  const state_id = params.vals.EstadoAtencion;
  const id_terapeuta = params.vals.Terapeuta;

  let violence_type_id = 0;
  if (params.vals.VPsicologica) violence_type_id = 1;
  else if (params.vals.VFisica) violence_type_id = 2;
  else if (params.vals.VEconomica) violence_type_id = 3;
  else if (params.vals.VSexual) violence_type_id = 4;

  var condition_id = params.vals.Victima ? 1 : 2;

  let recursos_id = 0;
  if (params.vals.CUmep) recursos_id = 1;
  else if (params.vals.COmm) recursos_id = 2;
  else if (params.vals.COng) recursos_id = 3;
  else if (params.vals.CJuzgado) recursos_id = 4;
  else if (params.vals.CFiscal) recursos_id = 5;

  let cause_id = 0;
  if (params.vals.CEconomica) cause_id = 1;
  else if (params.vals.CInfidelidad) cause_id = 2;
  else if (params.vals.CAlcoholismo) cause_id = 3;
  else if (params.vals.COtros) cause_id = 4;

  var location_violence_id = params.vals.VUrbana ? 1 : 2;

  var benefitted_amount =
    Number(params.vals.Ninos) +
    Number(params.vals.Ninas) +
    Number(params.vals.Otros);

  // data to JSON tipo_violencia, recursos, causas

  //Lo iba a hacer dinamico pero me tiene arto este proyecto "El grupo anterior no sabia lo que hacia y yo no tengo tiempo para refactorizar xd"
  /*let tipoViolencia = new Array();
  await axios.get(port+"/tipoviolencia").then(res =>{
    tipoViolencia= res.data;
  })*/
  let tipo_violencia = {};
  if (params.vals.VPsicologica) tipo_violencia["k1"] = 1;
  if (params.vals.VFisica) tipo_violencia["k2"] = 2;
  if (params.vals.VEconomica) tipo_violencia["k3"] = 3;
  if (params.vals.VSexual) tipo_violencia["k4"] = 4;

  let recursos = {};
  if (params.vals.CUmep) recursos["k1"] = 1;
  if (params.vals.COmm) recursos["k2"] = 2;
  if (params.vals.COng) recursos["k3"] = 3;
  if (params.vals.CJuzgado) recursos["k4"] = 4;
  if (params.vals.CFiscal) recursos["k5"] = 5;

  let causas = {};
  if (params.vals.CEconomica) causas["k1"] = 1;
  if (params.vals.CInfidelidad) causas["k2"] = 2;
  if (params.vals.CAlcoholismo) causas["k3"] = 3;
  if (params.vals.COtros) causas["k4"] = 4;

  const body = format.CASOS_POST_Y_PUT(
    case_number,
    benefitted_amount,
    location_violence_id,
    parseInt(state_id),
    parseInt(mun),
    parseInt(remission_id),
    recursos_id,
    //parseInt(municipal_resource_id),
    cause_id,
    parseInt(id_terapeuta),
    patient_id,
    condition_id,
    parseInt(params.vals.Tratamiento)
  );

  var response = axios
    .post(port + "/caso/", body, {
      headers: {
        "content-type": "application/json"
      }
    })
    .then(res => {
      console.log(body);
      console.log(res);
      updateCasoDataExtra(tipo_violencia, recursos, causas, patient_id);
    })
    .catch(error => {
      console.log(error);
    });
};

const updateCaso = (params, patient_id) => {
  //Solo hice copy and paste de lo que ya habia xd, disculpen en serio pero no habia tiempo para refactorizar
  const case_number = params.vals.NumeroEx;
  const remission_id = params.vals.Remision;
  // const municipal_resource_id = params.vals.AccesoJusticia;
  const mun = params.vals.Parroquia;
  const state_id = params.vals.EstadoAtencion;
  const id_terapeuta = params.vals.Terapeuta;
  let IdExiste = params.vals.IdExiste;

  let violence_type_id = 0;
  if (params.vals.VPsicologica) violence_type_id = 1;
  else if (params.vals.VFisica) violence_type_id = 2;
  else if (params.vals.VEconomica) violence_type_id = 3;
  else if (params.vals.VSexual) violence_type_id = 4;

  var condition_id = params.vals.Victima ? 1 : 2;

  let recursos_id = 0;
  if (params.vals.CUmep) recursos_id = 1;
  else if (params.vals.COmm) recursos_id = 2;
  else if (params.vals.COng) recursos_id = 3;
  else if (params.vals.CJuzgado) recursos_id = 4;
  else if (params.vals.CFiscal) recursos_id = 5;

  let cause_id = 0;
  if (params.vals.CEconomica) cause_id = 1;
  else if (params.vals.CInfidelidad) cause_id = 2;
  else if (params.vals.CAlcoholismo) cause_id = 3;
  else if (params.vals.COtros) cause_id = 4;

  var location_violence_id = params.vals.VUrbana ? 1 : 2;

  var benefitted_amount =
    Number(params.vals.Ninos) +
    Number(params.vals.Ninas) +
    Number(params.vals.Otros);

  // data to JSON tipo_violencia, recursos, causas

  //Lo iba a hacer dinamico pero me tiene arto este proyecto "El grupo anterior no sabia lo que hacia y yo no tengo tiempo para refactorizar xd"
  /*let tipoViolencia = new Array();
  await axios.get(port+"/tipoviolencia").then(res =>{
    tipoViolencia= res.data;
  })*/
  let tipo_violencia = {};
  if (params.vals.VPsicologica) tipo_violencia["k1"] = 1;
  if (params.vals.VFisica) tipo_violencia["k2"] = 2;
  if (params.vals.VEconomica) tipo_violencia["k3"] = 3;
  if (params.vals.VSexual) tipo_violencia["k4"] = 4;

  let recursos = {};
  if (params.vals.CUmep) recursos["k1"] = 1;
  if (params.vals.COmm) recursos["k2"] = 2;
  if (params.vals.COng) recursos["k3"] = 3;
  if (params.vals.CJuzgado) recursos["k4"] = 4;
  if (params.vals.CFiscal) recursos["k5"] = 5;

  let causas = {};
  if (params.vals.CEconomica) causas["k1"] = 1;
  if (params.vals.CInfidelidad) causas["k2"] = 2;
  if (params.vals.CAlcoholismo) causas["k3"] = 3;
  if (params.vals.COtros) causas["k4"] = 4;

  let body = {
    numero_expediente: case_number,
    cantidad_beneficiados: benefitted_amount,
    id_uviolencia: location_violence_id,
    id_estadoa: 2, //Estado de atencion igual a espera por default
    id_municipio: parseInt(mun),
    id_remision: parseInt(remission_id),
    id_recursos: recursos_id,
    id_causa: cause_id,
    id_terapeuta: parseInt(id_terapeuta),
    id_paciente: patient_id,
    id_condicion: condition_id,
    id_tratamiento: parseInt(params.vals.Tratamiento)
  };

  var response = axios
    .put(port + "/casoupdate/", body, {
      headers: {
        "content-type": "application/json"
      }
    })
    .then(res => {
      console.log(body);
      console.log(res);
      updateCasoDataExtra(tipo_violencia, recursos, causas, patient_id);
    })
    .catch(error => {
      console.log(error);
    });
};

const updateCasoDataExtra = (tipo_violencia, recursos, causas, idPaciente) => {
  console.log("Ejecuta");
  console.log(idPaciente);
  let body = {
    tipo_violencia,
    recursos,
    causas
  };
  let headers = {
    "content-type": "application/json"
  };
  axios
    .put(port + "/caso/extradata/" + idPaciente, body, { headers })
    .then(res => console.log(res))
    .catch(error => console.log(error));
};

const postUsuarioCreacion = async (usuario,id) => {
  axios.post(port + "/paciente_creacion/" + id,{usuario})
  .then(res => {
    console.log(res);
  })
  .catch(error => console.log(error));
};

const postUsuarioModifico = async (usuario,id) => {
  axios.post(port + "/paciente_modificacion/" + id,{usuario})
  .then(res => {
    console.log(res);
  })
  .catch(error => console.log(error));
};
