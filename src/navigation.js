import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, ControlAnchor, Navigation, NavigationType } from 'rc-bmap';
import './style.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        offset: {
          width: 0,
          height: 0,
        },
        anchor: ControlAnchor.TOP_LEFT,
        type: NavigationType.LARGE,
        showZoomInfo: true,
        geolocation: false,
    }
  }

  handleAnchor = () => {
    this.setState({
      anchor: ControlAnchor.BOTTOM_LEFT,
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
      type: NavigationType.PAN,
    })
  }
  hideZoom = () => {
    this.setState({
      showZoomInfo: false,
    })
  }
  geolocation = () => {
    this.setState({
      geolocation: true,
    })
  }
  render() {
    const { offset, anchor, type, showZoomInfo, geolocation } = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Navigation
            offset={offset}
            anchor={anchor}
            type={type}
            showZoomInfo={showZoomInfo}
            geolocation={geolocation}
          /> 
        </Map>
        <button onClick={this.handleOffset}>改变offset</button>
        <button onClick={this.handleAnchor}>改变停靠位置</button>
        <button onClick={this.handleType}>改变控件类型</button>
        <button onClick={this.hideZoom}>隐藏级别提示信息</button>
        <button onClick={this.geolocation}>集成定位功能</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));