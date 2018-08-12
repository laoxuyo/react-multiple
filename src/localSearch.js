import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, LocalSearch, getMapBounds } from 'rc-bmap';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "",
      center: {
        lng: 120.21937542,
        lat: 30.25924446, 
      },
      // location: "杭州市江干区",
      pageCapacity: 5,
    }
  }

  getRoute = (instance) => {
    this.state.route = instance;
  };

  mapMounted = (map) => {
    console.log(map)
    this.state.route.searchInBounds(["酒店", "加油站"], getMapBounds())
  };

  onInfoHtmlSet = (result) => {
    console.log('onInfoHtmlSet')
    console.log(result)
  }
  onResultsHtmlSet = (result) => {
    console.log('onResultsHtmlSet')
    console.log(result)
  }
  onSearchComplete = (result) => {
    console.log('onSearchComplete')
    console.log(result)
  }
 
  handleLocation = () => {
    this.setState({
      location: '上海市'
    })
  }
  handlePage = () => {
    this.setState({
      pageCapacity: 2
    })
  }
 
  render() {
    const { location, center, pageCapacity} = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.mapMounted}
          center={center}
         >
          <LocalSearch 
            getInstance={this.getRoute} 
            location={location}
            showInMap
            pageCapacity={pageCapacity}
            onInfoHtmlSet={this.onInfoHtmlSet}//标注气泡创建后的回调函数
            onResultsHtmlSet={this.onResultsHtmlSet}//结构列表添加完成后的回调函数
            onSearchComplete={this.onSearchComplete}//检索完成后回调函数
            onMarkersSet={this.onMarkersSet}//标注添加完成后的回调函数
        />
         </Map>
        <button onClick={this.handleLocation}>改变查询区域、地点</button>
        <button onClick={this.handlePage}>改变每页显示数量</button>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

//不知道怎么改变搜索信息
//设置location不显示搜索结果