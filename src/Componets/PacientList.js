import React, { Component } from 'react'
import {Row,Col, List} from 'antd';



class PacientList extends Component {
  
constructor(props) {
  super(props)
  this.state = {
    lista:["Jose",'Pedro','Guillermo','Juan']
  }
}
handelonClick=(input,value)=>{
this.setState({[input]:[value]});
console.log(value);
}
handleClickOpen = () => {
    this.setState({ open: true });
    console.log(this.state.open);
};
handleClose = () => {
    this.setState({ open: false });
  };
    render() {
      const {lista}=this.state;
        return (<Row>
                <Col span={6}>
                  <List
                  header={<div style={{textAlign:"center"}}><strong>En espera</strong></div>}
                  dataSource={lista}
                  bordered
                  renderItem={item => (
                    <List.Item>
                      <div> {item}</div>
                    </List.Item>
                  )}
                  />
                </Col>
                <Col span={6}>
                  <List
                  header={<div style={{textAlign:"center"}}><strong>En proceso</strong></div>}
                  dataSource={lista}
                  bordered
                  renderItem={item => (
                    <List.Item>
                      <div> {item}</div>
                    </List.Item>
                  )}
                  />
                </Col>
                <Col span={6}>
                  <List
                  header={<div style={{textAlign:"center"}}><strong>Abandono</strong></div>}
                  dataSource={lista}
                  bordered
                  renderItem={item => (
                    <List.Item>
                      <div> {item}</div>
                    </List.Item>
                  )}
                  />
                </Col>
                <Col span={6}>
                  <List
                   header={<div style={{textAlign:"center"}}><strong>Terminados</strong></div>}
                  dataSource={lista}
                  bordered
                  renderItem={item => (
                    <List.Item>
                      <div> {item}</div>
                    </List.Item>
                  )}
                  />
                </Col>
        </Row>
        )
    }
}

export default PacientList

