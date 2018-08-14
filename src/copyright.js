import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, ControlAnchor, LengthUnit, Copyright  } from 'rc-bmap';
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
        content: '该版权的文本信息，用于显示在地图上，支持HTML内容',
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
  handleContent = () => {
    this.setState({
      content: '<h4>该版权的文本信息，用于显示在地图上，支持HTML内容</h4>',
    })
  }

  
  render() {
    const { offset, anchor, content } = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Copyright  
            offset={offset} 
            anchor={anchor}
            content={content}
          />
        </Map>
        <button onClick={this.handleOffset}>改变offset</button>
        <button onClick={this.handleAnchor}>改变停靠位置</button>
        <button onClick={this.handleContent}>版权内容</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
