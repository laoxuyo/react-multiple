import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, ControlAnchor, MapTypeControlType, MapTypeCtrl, MapType  } from 'rc-bmap';
import './style.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        offset: {
          width: 0,
          height: 0,
        },
        anchor: ControlAnchor.TOP_RIGHT, 
        type: MapTypeControlType.HORIZONTAL, 
        mapTypes: [MapType.NORMAL, MapType.PERSPECTIVE, MapType.SATELLITE, MapType.HYBRID]
    }
  }

  handleAnchor = () => {
    this.setState({
      anchor: ControlAnchor.TOP_LEFT,
    })
  }
  handleOffset = () => {
    this.setState({
      offset: {
        width: 10,
        height: 10,
      }
    })
  }
  handleType = () => {
    this.setState({
      type: MapTypeControlType.DROPDOWN,
    })
  }

  handleMapTypes = () => {
    this.setState({
      mapTypes: [MapType.NORMAL, MapType.PERSPECTIVE, MapType.HYBRID],
    })
  }

  render() {
    const { offset, anchor, type, mapTypes } = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <MapTypeCtrl  
            offset={offset} 
            anchor={anchor}
            type={type}
            mapTypes={mapTypes}
          />
        </Map>
        <button onClick={this.handleOffset}>改变offset</button>
        <button onClick={this.handleAnchor}>改变停靠位置</button>
        <button onClick={this.handleType}>改变控件样式</button>
        <button onClick={this.handleMapTypes}>改变地图类型</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
