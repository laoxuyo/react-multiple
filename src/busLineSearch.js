import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, BusLineSearch } from 'rc-bmap';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "",
      location: "上海",
    }
  }

  getRoute = (instance) => {
    this.state.route = instance;
  };

  mapMounted = (map) => {
    this.state.route.getBusList(338);
  };

  onGetBusListComplete = (result) => {
    if (result) {
      // 获取第一个公交列表显示到map上
      const fstLine = result.getBusListItem(0);
      this.state.route.getBusLine(fstLine);
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
  handleLocation = () => {
    this.setState({
      location: '杭州'
    })
  }
 
  render() {
    const { location} = this.state;
    console.log(location)
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.mapMounted}
         >
          <BusLineSearch 
            getInstance={this.getRoute} 
            location={location}
            showInMap
            onGetBusListComplete={this.onGetBusListComplete}//公交列表查询后的回调函数
            onGetBusLineComplete={this.onGetBusLineComplete}//公交线路查询后的回调函数
            onBusListHtmlSet={this.onBusListHtmlSet}//列表渲染后回调函数
            onBusLineHtmlSet={this.onBusLineHtmlSet}//线路渲染后
            onPolylinesSet={this.onPolylinesSet}//添加公交线时
            onMarkersSet={this.onMarkersSet}//添加公交站点时
        />
         </Map>
        <button onClick={this.handleLocation}>改变查询区域、地点</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

//不知道怎么改变公交车
//改变location不变