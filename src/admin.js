import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'rc-bmap';
import './style.css'

class Admin extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100px' }}>
        <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv" />
      </div>
    );
  }
}

ReactDOM.render(<Admin />, document.getElementById('root'));