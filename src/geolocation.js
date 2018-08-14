import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, ControlAnchor, Geolocation } from 'rc-bmap';
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
        showAddressBar: true,
        autoLocation: false,
        locationIcon: {
          url: "http://api0.map.bdimg.com/images/copyright_logo.png",
          size: {
            width: 100,
            height: 100,
          },
        },
        events:{
          locationSuccess: (event) => {
            console.log('locationSuccess', event);
          },
          locationError: (event) => {
            console.log('locationError', event);
          }
        }
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
  hideAddressBar = () => {
    this.setState({
      showAddressBar: false,
    })
  }
  autoLocation = () => {
    this.setState({
      autoLocation: true,
    })
  }
  handleIcon = () => {
    this.setState({
      locationIcon: {
        url: "http://is4.mzstatic.com/image/thumb/Purple122/v4/74/cf/18/74cf1856-76c6-2782-df5a-5637454f6974/source/512x512bb.jpg",
        size: {
          width: 300,
          height: 157,
        },
        opts: {
          imageOffset: { width: 10, height: 10 },
        },
      },
    })
  }
  render() {
    const { offset, anchor, showAddressBar, locationIcon, autoLocation, events } = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Geolocation 
            offset={offset} // 停靠偏移值，默认为{ width: 0, height: 0 }
            anchor={anchor} // 停靠位置，默认为BOTTOM_LEFT
            showAddressBar={showAddressBar} // 是否显示定位信息面板。默认显示定位信息面板
            locationIcon={locationIcon} // 可自定义定位中心点的Icon样式
            autoLocation={autoLocation} // 添加控件时是否进行定位。默认添加控件时不进行定位
            events={events} // 绑定事件
          />
        </Map>
        <button onClick={this.handleOffset}>改变offset</button>
        <button onClick={this.handleAnchor}>改变停靠位置</button>
        <button onClick={this.hideAddressBar}>隐藏定位信息面板</button>
        <button onClick={this.autoLocation}>定位</button>
        <button onClick={this.handleIcon}>更换icon</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
