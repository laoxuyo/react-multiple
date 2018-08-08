import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'rc-bmap';
import './style.css'

class Index extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv" />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));