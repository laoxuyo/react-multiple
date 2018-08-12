import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, Tile } from 'rc-bmap';
import './style.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        zoom: 16,
        zIndex: 1,
        center: {
          lng: 116.332782,
          lat: 40.007978,
        },
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
    this.getTilesUrl()
  }
  handleZIndex = () => {
    this.setState({
      zIndex:-1,
    })
  }
  render() {
    const { zoom, center, zIndex, copyright } = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          center={center}
          zoom={zoom}
         >
         <Tile
         copyright = {copyright}
         getTilesUrl = {this.getTilesUrl}
         zIndex = {zIndex}
          /> 
         </Map>
        <button onClick={this.handleZoom}>改变zoom</button>
        <button onClick={this.handleCenter}>改变center</button>
        <button onClick={this.handleZIndex}>改变zIndex</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

//copyright不会用
//改变center报错