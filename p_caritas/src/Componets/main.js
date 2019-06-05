import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export class main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tileData:[
                 {
                     img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                     title:"Paciente 1",
                    author:"Jose Luis"
                 }
                 ,
                 {
                    img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                    title:"Paciete 2",
                   author:"Jose Luis"
                }
                ,{
                    img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                    title:"Paciente 3",
                   author:"Jose Luis"
                }, {
                    img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                    title:"Paciente 1",
                   author:"Jose Luis"
                }
                ,
                {
                   img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                   title:"Paciete 2",
                  author:"Jose Luis"
               }
               ,{
                   img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                   title:"Paciente 3",
                  author:"Jose Luis"
               }
             ]
        }
    }
    
    render() {

          
        return (
            <div>
                <h1><strong>Citas para hoy!</strong></h1>
                <div style={{justifyContent: 'space-around', overflow: 'hidden'}}>
      <GridList style={{ flexWrap: 'nowrap',
              // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
              transform: 'translateZ(0)'}} cols={4}>
        {this.state.tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon  />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
            </div>
        )
    }
}

export default main




/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

