import React, { Component } from "react";
import Forms from "./Forms/index";
import Stats from "./Stats/Stats";
import Pacients from "./Pacients/Pacients";
import Cases from "./Cases/casos_view";
import ConfigTab from "./Configuration/ConfigTab";
export default class index extends Component {
  render() {
    const { values, rol } = this.props;
    if (rol === "Administrador") {
      switch (values) {
        case 0:
          return <Forms disabled={false} />;
        case 1:
          return <Stats />;
        case 2:
          return <Pacients />;
        case 3:
          return <ConfigTab />;
        default:
          return <Forms />;
      }
    } else {
      switch (values) {
        case 0:
          return <Forms disabled={false} />;
        case 1:
          return <Stats />;
        case 2:
          return <Pacients />;
        default:
          return <Forms />;
      }
    }
  }
}
