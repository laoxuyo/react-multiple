import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, TrafficControl, ControlAnchor } from 'rc-bmap';
import './style.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      anchor: ControlAnchor.BOTTOM_RIGHT,
    }
  }
 
  handleAchor = () => {
    this.setState({
      anchor: ControlAnchor.TOP_LEFT,
    })
  }
  
  render() {
    const { anchor } = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
         >
           <TrafficControl anchor={anchor} />
         </Map>
        <button onClick={this.handleAchor}>改变停靠位置</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

//改变控件的停靠位置，本来的bottom_right，改到top_left，但是运动轨迹是bottom_right->top_right->top_left