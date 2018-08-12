import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, RidingRoute, getPoiByKeyword } from 'rc-bmap';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "",
      // location: "杭州市江干区",
      pageCapacity: 5,
    }
  }

  getRoute = (instance) => {
    this.state.route = instance;
  };

  mapMounted = (map) => {
    Promise.all(
      [getPoiByKeyword("百度大厦"), getPoiByKeyword("北京邮电大学西门")]
    ).then((res) => {
      this.state.route.search(res[0], res[1]);
    });
  };

  handleLocation = () => {
    this.setState({
      location: '上海市'
    })
  }
 
  render() {
    const { location} = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.mapMounted}
         >
          <RidingRoute 
            getInstance={this.getRoute} 
            location={location}
            showInMap
           
        />
         </Map>
        <button onClick={this.handleLocation}>改变查询区域、地点</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

//不知道怎么改变搜索信息
//设置location不显示搜索结果