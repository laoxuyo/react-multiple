import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, TransitRoute, DrivingPolicy, getPoiByKeyword, IntercityPolicy, TransitTypePolicy } from 'rc-bmap';
import './style.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      route: "",
      policy: DrivingPolicy.NORMAL,
      // intercityPolicy: IntercityPolicy.NORMAL,
      // transitTypePolicy: TransitTypePolicy.NORMAL,
      pageCapacity: 2,//返回方案的个数
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

  render() {
    const { policy } = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.mapMounted}
         >
          <TransitRoute  
            getInstance={this.getRoute} 
            showInMap
            policy={policy}
        />
         </Map>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
