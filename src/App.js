import React, { Component } from 'react';
import {htmlToCanvasDataURL} from "./utils/utility";


class App extends Component {
  constructor(props) {
    super(props);
    this.imgRefs = React.createRef();
    this.resultRefs = React.createRef();
    this.state = {
      canvas: '',
    };
  };

  onClickSnapshot = () => {
    this.drawSnapshot();
  };

  drawSnapshot = async () => {
    const src = await htmlToCanvasDataURL(this.imgRefs.current);
    this.setState({
      canvas: src,
    })
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.onClickSnapshot}>capture</button>
        <a download="myImage.jpg" href={this.state.canvas}>Download to myImage.jpg</a>
        <div ref={this.imgRefs}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nsgRjLZntKqK6j0kKjHsYJtQQGsLo27TeDJhy3p85qp9m9WB" alt="cdn" />
        </div>
        <img src={this.state.canvas} alt="test" />
      </div>
    );
  }
}

export default App;
