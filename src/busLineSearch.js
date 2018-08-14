import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, BusLineSearch } from 'rc-bmap';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.route;
  }

  getRoute = (instance) => {
    this.route = instance;
  };

  mapMounted = (map) => {
    this.route.getBusList(338);
  };

  onGetBusListComplete = (result) => {
    if (result) {
      // 获取第一个公交列表显示到map上
      const fstLine = result.getBusListItem(0);
      this.route.getBusLine(fstLine);
    }
  }

  onGetBusLineComplete = (result) => {
    console.log('onGetBusLineComplete')
    console.log(result)
  }
  onBusListHtmlSet = (result) => {
    console.log('onBusListHtmlSet')
    console.log(result)
  }
  onBusLineHtmlSet = (result) => {
    console.log('onBusLineHtmlSet')
    console.log(result)
  }
  onBusLineHtmlSet = (result) => {
    console.log('onBusLineHtmlSet')
    console.log(result)
  }
  onPolylinesSet = (result) => {
    console.log('onPolylinesSet')
    console.log(result)
  }

 
  render() {
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.mapMounted}
         >
          <BusLineSearch 
            getInstance={this.getRoute} 
            showInMap
            onGetBusListComplete={this.onGetBusListComplete}//公交列表查询后的回调函数
            onGetBusLineComplete={this.onGetBusLineComplete}//公交线路查询后的回调函数
            onBusListHtmlSet={this.onBusListHtmlSet}//列表渲染后回调函数
            onBusLineHtmlSet={this.onBusLineHtmlSet}//线路渲染后
            onPolylinesSet={this.onPolylinesSet}//添加公交线时
            onMarkersSet={this.onMarkersSet}//添加公交站点时
        />
         </Map>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));