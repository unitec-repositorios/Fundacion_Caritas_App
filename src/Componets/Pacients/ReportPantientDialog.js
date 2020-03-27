import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Button from "@material-ui/core/Button";
import PrintIcon from "@material-ui/icons/Print";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/dialogReport.css";
import logo from "../../assets/logocaritas.png";

const url = "https://apicaritas.herokuapp.com/api/paciente/";
const port = "http://localhost:3001/api/";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class ReportPantientDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: 0,
      reporte: {},
      report: "Termino",
      reporteHTML: [],
      casoData: {},
      pacienteData: {},
      value: "",
      value2: "",
      open: false,
      isError: false
    };
  }

  handleChange = (event, input) => {
    this.setState({ [input]: event.target.value });
  };

  openDialog = e => {
    this.props.handleClickOpen();
  };

  CloseDialog = e => {
    console.log("close");
    this.props.handleClose();
  };

  componentDidMount = async e => {
    let id = this.props.vals.selectedRow[0].id_paciente;
    let isAbandon = this.props.vals.isAbandon;
    let report = isAbandon ? "Abandono" : "Termino";
    this.setState({ report: report });
    await this.getData(id,report);
    await this.getCasoData(id);
    await this.getPacienteData(id);
    await this.getText();
  };

  getText = async () => {
    await Axios.get(port + "config/getreporte")
      .then(res => {
        let text = res.data;
        text = text + ".";
        text = text.substring(0, text.length - 1);
        console.log(text);
        this.setState({ value: text });
        this.textToBody(text);
      })
      .catch(err => console.log(err));
  };

  getData = async (id,report) => {
 //   let report = this.state.report;
    console.log(report);
    await Axios.get(port + "reporte/" + `${id}`)
      .then(res => {
        this.setState({
          reporte: {
            juzgado: res.data.juez,
            nombres: res.data.nombres,
            apellidos: res.data.apellidos,
            numero_expediente: res.data.numero_expediente,
            tipo_reporte: report,
            fecha: res.data.fecha,
            terapeuta: res.data.nombre,
            codigo: res.data.codigo
          }
        });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  getDataToPDF = async data => {
    let img = await html2canvas(document.querySelector(data)).then(
      async canvas => {
        let img = await canvas.toDataURL("image/png");
        return img;
      }
    );
    return img;
  };

  printPDF = async () => {
    await this.generateHistorial();
    let imgLogo = await this.getDataToPDF("#logo");
    let imgBody = await this.getDataToPDF("#pdf");
    let docPDF = new jsPDF();
    docPDF.addImage(imgLogo, "JPEG", 20, 20);
    docPDF.addImage(imgBody, "JPEG", 20, 100);
    //Print PDF
    docPDF.autoPrint();
    docPDF.output("dataurlnewwindow");
  };

  generateHistorial = async () => {
    let username = localStorage.getItem("user");
    let body = {
      num_expediente: this.state.casoData.numero_expediente,
      nombre: this.state.pacienteData.nombres,
      apellido: this.state.pacienteData.apellidos,
      tipo_constancia: this.state.report
    };
    let id = this.state.casoData.id_paciente;
    let comment = prompt("Comentario", "");

    if (comment != null) {
      body.comentario = comment;
      await this.postHistorial(body, id);
      await this.postUsuarioModifico(username, id);
    }
  };

  getCasoData = id => {
    Axios.get(port + "caso/detail/" + id)
      .then(res => {
        this.setState({ casoData: res.data[0] });
        console.log(res.data[0]);
      })
      .catch(error => console.log(error));
  };

  getPacienteData = id => {
    console.log("Hola soy el ID " + id);
    Axios.get(port + "paciente/" + id)
      .then(res => {
        this.setState({ pacienteData: res.data[0] });
        console.log(res.data[0]);
      })
      .catch(error => console.log(error));
  };

  postHistorial = async (body, id) => {
    Axios.post(port + "constancia_creacion/" + id, body)
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  postUsuarioModifico = async (usuario, id) => {
    Axios.post(port + "paciente_modificacion/" + id, { usuario })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  /*getBodyReport1 = () => {
    return (
      "Pastoral Social Caritas Diócesis de San Pedro Sula, notifica que el Sr. (a): " +
      this.state.reporte.nombres +
      " " +
      this.state.reporte.apellidos +
      " " +
      this.state.reporte.numero_expediente +
      " " +
      this.state.report +
      " el esquema de Consejería, al que fue remitido por el " +
      this.state.reporte.juez +
      "."
    );
  };

  getBodyReport2 = () => {
    return (
      "Se extiende la presente constancia en la ciudad de San Pedro Sula, departamento de Cortes el " +
      this.state.reporte.fecha +
      "."
    );
  };*/

  textToBody = text => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      //Get Campos
      if (text[i] === "-") {
        let result = this.getToken("-", text.substring(i + 1, text.length));
        i = i + result.pos;
        newText = newText + this.state.reporte[result.token];
      } else {
        newText = newText + text[i];
      }
    }
    this.setState({ value2: newText });
    this.textToHTML(newText);
  };

  getToken = (init, text) => {
    let result = {
      token: "",
      pos: 0
    };
    for (let i = 0; i < text.length; i++) {
      if (text[i] == init) {
        result.token = text.substring(0, i); //Obtengo el nombre del campo
        result.pos = i + 1; // Le mando nueva posicion para continuar recorriendo la cadenar tomando en cuenta que esta funcion se llama dentro de un for el cual aumenta la cantidad de i +1
        break;
      }
    }
    return result;
  };

  textToHTML = text => {
    let array = new Array();
    let tmpText = "";
    for (let i = 0; i < text.length; i++) {
      if (text.substring(i, i + 1) === "\n") {
        array.push(<p key={i}>{tmpText}</p>);
        tmpText = "";
        let result = this.getCantEnter(text.substring(i, text.length));
        console.log(result.cant);
        if (result.cant > 1) {
          array.push(this.spacer(result.cant - 1));
        } //*/
        i = i + result.pos;
      } else {
        tmpText = tmpText + text[i];
        if (i + 1 == text.length) {
          array.push(<p key={i}>{tmpText}</p>);
        }
      }
    }
    console.log(array);
    this.setState({ reporteHTML: array });
  };

  getCantEnter = text => {
    let result = {
      cant: 0,
      pos: 0
    };
    for (let i = 0; i < text.length; i++) {
      if (text.substring(i, i + 1) === "\n") {
        result.cant++;
        result.pos = i;
      } else {
        break;
      }
    }
    return result;
  };

  spacer = n => {
    let array = [];
    for (let c = 0; c < n; c++) {
      array.push(c);
    }
    let result = array.map(d => {
      return <br key={d} />;
    });
    return result;
  };

  render() {
    const { vals } = this.props;
    /* let bodyReport1 = this.getBodyReport1();
    let bodyReport2 = this.getBodyReport2();*/

    return (
      <div>
        <Dialog
          fullScreen
          open={vals.openReport}
          onClose={this.CloseDialog}
          TransitionComponent={Transition}
        >
          <AppBar style={{ position: "relative" }} color="secondary">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={this.CloseDialog}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="h6"
                style={{ marginLeft: "2em", flex: 1 }}
                color="inherit"
              >
                <Row>
                  <Col xs={12} md={8}>
                    Reporte de {this.state.report}
                  </Col>
                  <Col xs={6} md={4}>
                    <Container>
                      <Button
                        variant="contained"
                        onClick={this.printPDF}
                        startIcon={<PrintIcon />}
                        color="default"
                      >
                        Imprimir
                      </Button>
                    </Container>
                  </Col>
                </Row>
              </Typography>
            </Toolbar>
          </AppBar>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <span className="center-spacer"></span>
            <div style={{ width: "17.59cm" }}>
              <img id="logo" src={logo} alt="Logo"></img>
            </div>

            <span className="center-spacer"></span>
          </Row>
          <Row>
            <span className="center-spacer"></span>
            <div id="pdf" style={{ width: "17.59cm" }}>
              {this.state.reporteHTML}
            </div>

            <span className="center-spacer"></span>
          </Row>
        </Dialog>
      </div>
    );
  }
}

export default ReportPantientDialog;
