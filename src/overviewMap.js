import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, ControlAnchor, OverviewMap  } from 'rc-bmap';
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
        isOpen: true,
        size: {
          width: 150,
          height: 150,
        },
        events:{
          viewchanged: (event) => {
            console.log('viewchanged', event);
          },
          viewchanging: (event) => {
            console.log('viewchanging', event);
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
  hideMap = () => {
    this.setState({
      isOpen: false,
    })
  }
  handleSize = () => {
    this.setState({
      size: {
        width: 300,
        height: 300,
      },
    })
  }
  
  render() {
    const { offset, anchor, size, isOpen, events } = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <OverviewMap  
            offset={offset} // 停靠偏移值，默认为{ width: 0, height: 0 }
            anchor={anchor} // 停靠位置，默认为BOTTOM_LEFT
            size={size} // 缩略地图控件的大小
            isOpen={isOpen} // 缩略地图添加到地图后的开合状态，默认为关闭
            events={events} // 事件绑定
          />
        </Map>
        <button onClick={this.handleOffset}>改变offset</button>
        <button onClick={this.handleAnchor}>改变停靠位置</button>
        <button onClick={this.hideMap}>收起缩略地图</button>
        <button onClick={this.handleSize}>改变大小</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
