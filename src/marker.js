import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, Tile } from 'rc-bmap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        zoom: 16,
        offset: {
          width: 0,
          height: 0,
        },
        icon: {
          url: "http://lbsyun.baidu.com/jsdemo/img/fox.gif",
          size: {
            width: 300,
            height: 157,
          },
          opts: {
            imageOffset: { width: 10, height: 10 },
          },
        }
    }
  }
 getTilesUrl = (tileCoord, zoom) => {
    const x = tileCoord.x;
    const y = tileCoord.y;
    //根据当前坐标，选取合适的瓦片图
    return 'http://lbsyun.baidu.com/jsdemo/demo/tiles/' + zoom + '/tile' + x + '_' + y + '.png';  
  };
  handleZoom = () => {
    this.setState({
      zoom:14,
    })
  }
  handleCenter = () => {
    this.setState({
      center: {
        lng: 120.21937542,
        lat: 30.25924446, 
      }
    })
  }
  render() {
    const { zoom, center } = this.state;
    return (
      <div style={{ height: 400 }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          center={center}
          zoom={zoom}
         >
         <Tile
         transparentPng
         getTilesUrl = {this.getTilesUrl}
          /> 
         </Map>
        <button onClick={this.handleZoom}>改变zoom</button>
        <button onClick={this.handleCenter}>改变center</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));