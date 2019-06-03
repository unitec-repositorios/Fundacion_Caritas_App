import React, { Component } from 'react';
import Bar from './appBar';
import { Line, Pie, Bar as BarChart } from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid  from '@material-ui/core/Grid';

class Stats extends Component {

  render() {
    const data_denounces = {
      labels: [
        'San Pedro Sula',
        'La Lima',
        'Villanueva'
      ],
      datasets: [
        {
          label: 'Numero de denuncias por municipio',
          data: [22,19,27],
          fill: false,          // Don't fill area under the line
          borderColor: 'blue'  // Line color
        },
        {
          label: 'Numero de denuncias atendidas',
          data: [15, 11, 8],
          fill: false,
          borderColor: 'green'
        },
        {
          label: 'Numero de denuncias por atender',
          data: [7, 8, 19],
          fill: false,
          borderColor: 'red'
        }
      ]
    }

    const data_gender = {
      labels: [
        'Masculino',
        'Femenino'
      ],
      datasets: [
        {
          data: [20, 10],
          backgroundColor: ['red', 'blue']
        }
      ]
    }

    const data_types = {
      labels: [
        'Violencia psicologica',
        'Violencia sexual',
        'Violencia fisica',
        'Violencia no especificada'
      ],
      datasets: [
          {
            label: 'Psicologica',
            data: [5, 0, 0, 0],
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 0
          },
          {
            label: 'Sexual',
            data: [0, 3, 0, 0],
            backgroundColor: 'green',
            borderColor: 'green',
            borderWidth: 0
          },
          {
            label: 'Fisica',
            data: [0, 0, 12, 0],
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 0
          },
          {
            label: 'No especificada',
            data: [0, 0, 0, 1],
            backgroundColor: 'orange',
            borderColor: 'orange',
            borderWidth: 0
          }
      ]
    }

    return (
      <div>  
        <Bar/>
        <Card>
          <CardContent>
            <Grid container>
            <Grid item sm={6}>
            <div>
              <h3 style={{textAlign: "center"}}>Denuncias por municipio</h3>
            </div>
            
            <article className="canvas-container">
              <Line 
                height={400}
                width={200}
                data={data_denounces}
                options={{ maintainAspectRatio: false }} 
              />
            </article>
            </Grid>
            <Grid item sm={6}>
            <div>
              <h3 style={{textAlign: "center"}}>Denuncias por genero</h3>
            </div>
            
            <article className="canvas-container">
              <Pie
                data = {data_gender}
                options={{ maintainAspectRatio: false }}
                width={100}
                height={400}
              />
            </article>
            </Grid>
            <Grid item sm={6}>
            <div>
              <h3 style={{textAlign: "center"}}>Casos por tipo de violencia</h3>
            </div>
            
            <article className="canvas-container">
              <BarChart
                data = {data_types}
                options={{ maintainAspectRatio: false }}
                width={50}
                height={400}
              />
            </article>
            </Grid>
            </Grid>
          </CardContent>
        </Card>        
      </div>
    );
  }
}

export default Stats;
