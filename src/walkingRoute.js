import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import {
  Map,
  WalkingRoute,
  getPoiByKeyword,
} from 'rc-bmap';

let route;
const getRoute = (instance) => {
  route = instance;
};

const mapMounted = (map) => {
  Promise.all(
    [getPoiByKeyword("百度大厦"), getPoiByKeyword("北京邮电大学西门")]
  ).then((res) => {
    route.search(res[0], res[1]);
  });
};

ReactDOM.render(
  <div style={{ height: "80%" }}>
    <Map
      ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
      scrollWheelZoom
      mapMounted={mapMounted}
    >
      <WalkingRoute
        getInstance={getRoute}
        showInMap
      // 这里还有更多属性，可参考文档
      />
    </Map>
  </div>,
  document.getElementById('root')
);
