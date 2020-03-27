import React, { Component } from "react";
import Axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Button from "@material-ui/core/Button";
import PrintIcon from "@material-ui/icons/Print";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import "../../styles/dialogReport.css";
import logo from "../../assets/logocaritas.png";
import TextField from "@material-ui/core/TextField";
import "../../styles/dialogReport.css";
import { Dialog, AppBar, Toolbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
const port = "http://localhost:3001/api/";

class ConfigReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reporte: {},
      value: "",
      value2: "",
      nameCampos: [],
      reporteHTML: [],
      showPDf: false
    };
  }

  componentDidMount = async e => {
    await this.getCampos();
    this.getData();
  };

  getData = () => {
    Axios.get(port + "config/getreporte")
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

  getCampos = async () => {
    await this.setState({
      reporte: {
        juzgado: "Juzgado de Paz",
        nombres: "Juan",
        apellidos: "Fulano Mengano",
        numero_expediente: "exp v-3052",
        tipo_reporte: "Abandono",
        fecha: "30 de Marzo de 2020",
        terapeuta: "Miran Fonseca",
        codigo: "Psicóloga 07-953"
      }
    });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.textToBody(event.target.value);
  };

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
    let imgLogo = await this.getDataToPDF("#logo");
    let imgBody = await this.getDataToPDF("#pdf");
    let docPDF = new jsPDF();
    docPDF.addImage(imgLogo, "JPEG", 20, 20);
    docPDF.addImage(imgBody, "JPEG", 20, 100);
    //Print PDF
    docPDF.autoPrint();
    docPDF.output("dataurlnewwindow");
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

  setViewPDF = () => {
    let show = !this.state.showPDf;
    this.setState({ showPDf: show });
  };

  savePDF = () => {
    let body = {
      text: this.state.value
    };
    Axios.post(port + "config/savereporte", body)
      .then(res => {
        console.log(res);
        //window.confirm("Se guardo exitosamente");
        this.showDialogAlert(res === "okay");
      })
      .catch(err => console.log(err));
  };

  showDialogAlert = isError => {
    this.setState({ isError: isError });
    this.openAlertDialog();
    setTimeout(() => {
      this.closeAlertDialog();
    }, 3000);
  };

  openAlertDialog = () => {
    this.setState({ open: true });
  };

  closeAlertDialog = () => {
    this.setState({ open: false });
  };

  render() {
    if (!this.state.showPDf) {
      return (
        <div>
          <Container>
            <Row>
              <Col sm={2}>
                <Button variant="contained" onClick={() => this.setViewPDF()}>
                  Ver PDF
                </Button>
              </Col>
              <Col sm={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => this.getData()}
                >
                  Resetear
                </Button>
              </Col>
              <Col sm={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.savePDF()}
                >
                  Guardar
                </Button>
              </Col>
            </Row>
          </Container>
          <br></br>
          <br></br>
          <Row>
            <Col>
              <TextField
                id="outlined-multiline-flexible"
                label="Cuerpo del pdf"
                multiline
                rows="21"
                value={this.state.value}
                onChange={this.handleChange}
                variant="outlined"
                fullWidth
              />
            </Col>
            <Col>
              <p>Campos</p>
              <ListGroup>
                <ListGroup.Item>-juzgado- = Juzgado que remite</ListGroup.Item>
                <ListGroup.Item>
                  -nombres- = Nombres del paciente
                </ListGroup.Item>
                <ListGroup.Item>
                  -apellidos- = Apellidos del paciente
                </ListGroup.Item>
                <ListGroup.Item>
                  -numero_expediente- = Expediente del paciente
                </ListGroup.Item>
                <ListGroup.Item>
                  -tipo_reporte- = Tipo de reporte Abandono/terminado
                </ListGroup.Item>
                <ListGroup.Item>-fecha-</ListGroup.Item>
                <ListGroup.Item>-terapeuta-</ListGroup.Item>
                <ListGroup.Item>
                  -codigo- = Codigo del terapeuta (Ejemplo: Psicóloga 63-292)
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          {this.state.open && (
            <Dialog
              open={this.state.open}
              onClose={this.closeAlertDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              {this.state.isError ? (
                <Alert severity="error">
                  <AlertTitle>Operación fallida</AlertTitle>
                  Intente más tarde.
                </Alert>
              ) : (
                <Alert severity="success" style={{ width: "100%" }}>
                  <AlertTitle>Operación existosa</AlertTitle>
                  Datos del reporte actualizado correctamente.
                </Alert>
              )}
            </Dialog>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <Container>
            <Row>
              <Col sm={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => this.setViewPDF()}
                >
                  Volver
                </Button>
              </Col>
              <Col sm={2}>
                <Button
                  variant="contained"
                  onClick={this.printPDF}
                  startIcon={<PrintIcon />}
                  color="default"
                >
                  Imprimir
                </Button>
              </Col>
            </Row>
          </Container>
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
        </div>
      );
    }
  }
}

export default ConfigReport;
