import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, DistanceTool } from 'rc-bmap';
import './style.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        followText: "单击确定地点，双击结束",
        unit: "metric",
        lineColor: "#ff6319",
        lineStroke: 2,
        opacity:0.8,
        lineStyle: "solid",
        cursor: "http://is4.mzstatic.com/image/thumb/Purple122/v4/74/cf/18/74cf1856-76c6-2782-df5a-5637454f6974/source/512x512bb.jpg",
        tool:"",
        events: {
            onaddpoint() {
              console.log('on add');
            }
          }
    }
  }
  openTool = (map) => {
    this.state.tool.open(); // 开启测距状态
  };
  closeTool = (map) => {
    this.state.tool.close(); // 关闭测距状态
  };
  getTool = (instance) => {
    this.state.tool = instance;
  };
  handleText = () => {
    this.setState({
      followText: "单击双击",
    })
  }
  handleUnit = () => {
    this.setState({
        unit: "us"
    })
  }
  handleLineColor = () => {
    this.setState({
        lineColor: "#000000",
    })
  }
  handleLineStroke = () => {
    this.setState({
        lineStroke: 3,
    })
  }
  handleOpacity = () => {
    this.setState({
        opacity: 0.5,
    })
  }
  handleLineStyle = () => {
    this.setState({
        lineStyle: "dashed",
    })
  }
  handleCursor = () => {
    this.setState({
        cursor: "http://api.map.baidu.com/images/ruler.cur",
    })
  }
  
  render() {
    const { followText, unit, lineColor, lineStroke, opacity, lineStyle, cursor, events } = this.state;
    console.log(lineColor)
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.mapMounted}
         >
         <DistanceTool
           followText={followText}
           unit = {unit}
           lineColor = {lineColor}
           lineStroke = {lineStroke}
           opacity = {opacity}
           lineStyle = {lineStyle}
           cursor = {cursor}
           getInstance={this.getTool} 
           events={events}
          /> 
         </Map>
        <button onClick={this.openTool}>开启</button>
        <button onClick={this.closeTool}>关闭</button>
        <button onClick={this.handleText}>改变提示内容</button>
        <button onClick={this.handleUnit}>改变单位</button>
        <button onClick={this.handleLineColor}>改变线条颜色</button>
        <button onClick={this.handleLineStroke}>改变线宽</button>
        <button onClick={this.handleOpacity}>改变透明度</button>
        <button onClick={this.handleLineStyle}>改变线条样式</button>
        <button onClick={this.handleCursor}>改变鼠标样式</button>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
//使用之前是要先open，是不是要说明一下