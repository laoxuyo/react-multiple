import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, ControlAnchor, CityList } from 'rc-bmap';
import './style.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        offset: {
          width: 0,
          height: 0,
        },
        anchor: ControlAnchor.TOP_RIGHT, 
    }
  }

  handleAnchor = () => {
    this.setState({
      anchor: ControlAnchor.TOP_LEFT,
    })
  }
  handleOffset = () => {
    this.setState({
      offset: {
        width: 10,
        height: 10,
      }
    })
  }
  onChangeBefore = () => {
    console.log('onChangeBefore')
  }
  onChangeAfter = () => {
    console.log('onChangeAfter')
  }

  render() {
    const { offset, anchor } = this.state;
    return (
      <div style={{ height: "80%" }}>
        <Map 
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <CityList  
            offset={offset} 
            anchor={anchor}
            onChangeBefore={this.onChangeBefore}
            onChangeAfter={this.onChangeAfter}
          />
        </Map>
        <button onClick={this.handleOffset}>改变offset</button>
        <button onClick={this.handleAnchor}>改变停靠位置</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
