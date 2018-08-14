import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, ControlAnchor, LengthUnit, Scale  } from 'rc-bmap';
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
        unit: LengthUnit.METRIC,
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
  handleUnit = () => {
    this.setState({
      unit: LengthUnit.IMPERIAL,
    })
  }

  
  render() {
    const { offset, anchor, unit } = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Scale  
            offset={offset} 
            anchor={anchor}
            unit={unit}
          />
        </Map>
        <button onClick={this.handleOffset}>改变offset</button>
        <button onClick={this.handleAnchor}>改变停靠位置</button>
        <button onClick={this.handleUnit}>改变单位</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
