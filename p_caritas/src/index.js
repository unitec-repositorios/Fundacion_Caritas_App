import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import stats from './Componets/Stats';
import data from './Componets/data';
import casos_views from './Componets/casos_view';
import './index.css';
import Stepper from './Componets/Stepper';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';

const routing =(
    <Router>
        <div>
                <Route exact path='/' component={App}/>
                <Route exact path='/Formulario' component={Stepper}/>
                <Route path='/Estadisticas' component={stats}/>
                <Route path='/Pacientes' component={data}/>
                <Route path='/Casos' component={casos_views}/>
                
        </div>
        
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
