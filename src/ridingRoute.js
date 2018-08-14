import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, RidingRoute, getPoiByKeyword } from 'rc-bmap';
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
    Promise.all(
      [getPoiByKeyword("百度大厦"), getPoiByKeyword("北京邮电大学西门")]
    ).then((res) => {
      this.route.search(res[0], res[1]);
    });
  };

  render() {
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.mapMounted}
         >
          <RidingRoute 
            getInstance={this.getRoute} 
            showInMap
        />
         </Map>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
