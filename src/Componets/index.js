import React, { Component } from 'react'
import Forms from './Forms/index';
import Stats from './Stats/Stats';
import Pacients from './Pacients/Pacients';
import Cases from './Cases/casos_view';
export default class index extends Component {

    render() {
        const {values}=this.props;
        switch (values){
            case 0: return(<Forms/>)
            case 1: return(<Stats/>)
            case 2: return(<Pacients/>)
            case 3: return(<Cases/>)
            default: return(<Forms/>)
        }
    }
}
