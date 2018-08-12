import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { Map, Boundary } from 'rc-bmap';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '杭州市萧山区',
      onError: () => {
        console.log('onError');
      },
      strokeColor: "blue",
      fillColor: "red",
      strokeWeight: 5,
      strokeOpacity: 0.5,
      fillOpacity: 0.9,
      strokeStyle: "dashed",
      massClear: false,
      editing: false,
      clicking: true,
      events: {
        click() {
          console.log('Boundary click');
        }
      }
    }
  }
  handleName = () => {
    this.setState({
      name: '北京市朝阳区'
    })
    console.log(" name:北京市朝阳区");
  }
  handleOnError = () => {
    this.setState({
      onError: () => {
        console.log("onError");

      }
    })
  }

  handleAutoViewport = () => {
    this.setState({
      autoViewport: true
    })
    console.log(" autoViewport:true");

  }

  handleStrokeColor = () => {
    this.setState({
      strokeColor: "red"
    })
    console.log("  strokeColor:red");
  }

  handleFillColor = () => {
    this.setState({
      fillColor: "blue"
    })
    console.log("   fillColor:blue");
  }

  handleStrokeWeight = () => {
    this.setState({
      strokeStyle: 10
    })
    console.log("  strokeStyle:10");
  }

  handleStrokeOpacity = () => {
    this.setState({
      strokeOpacity: 0.1
    })
    console.log("strokeOpacity:0.1");
  }

  handleStrokeStyle = () => {
    this.setState({
      strokeStyle: "solid"
    })
    console.log("  strokeStyle:solid");
  }
  handleMassClear = () => {
    this.setState({
      massClear: true
    })
    console.log("massClear:true");
  }

  handleEditing = () => {
    this.setState({
      editing: true
    })
    console.log("editing:true");
  }


  handleClicking = () => {
    this.setState({
      clicking: false
    })
    console.log(" clicking:false");
  }


  handleEvents = () => {
    this.setState({

    })
    console.log("");
  }

  render() {

    const { name, onError, autoViewport, strokeColor, fillColor, strokeWeight, strokeOpacity, fillOpacity, strokeStyle, massClear, editing, clicking, events } = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
        >
          <Boundary
            name={name} // 行政区域名字
            autoViewport
            strokeColor={strokeColor} // 边线颜色
            fillColor={fillColor} // 填充颜色。当参数为空时，圆形将没有填充效果
            strokeWeight={strokeWeight} // 边线的宽度，以像素为单位
            strokeOpacity={strokeOpacity} // 边线透明度，取值范围0 - 1
            fillOpacity={fillOpacity} // 填充的透明度，取值范围0 - 1
            strokeStyle={strokeStyle} // 边线的样式，solid或dashed
          ></Boundary>
        </Map>

        <button className="butt" onClick={this.handleName}></button>
        <button className="butt" onClick={this.handleOnError}></button>
        <button className="butt" onClick={this.handleAutoViewport}></button>
        <button className="butt" onClick={this.handleStrokeColor}></button>
        <button className="butt" onClick={this.handleFillColor}></button>
        <button className="butt" onClick={this.handleStrokeWeight}></button>
        <button className="butt" onClick={this.handleStrokeOpacity}></button>
        <button className="butt" onClick={this.handleStrokeStyle}>handleStrokeStyle</button>
        <button className="butt" onClick={this.handleMassClear}></button>
        <button className="butt" onClick={this.handleEditing}></button>
        <button className="butt" onClick={this.handleClicking}></button>
        <button className="butt" onClick={this.handleEvents}></button>

      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'));