import React, { Component } from 'react';
import html2canvas from 'html2canvas';

class App extends Component {
  constructor(props) {
    super(props);
    this.imgRefs = React.createRef();
    this.resultRefs = React.createRef();
    this.state = {
      canvas: null,
    };
  };

  onClickSnapshot = async () => {
    const canvas = await html2canvas(this.imgRefs.current, {
      // allowTaint: true,
      useCORS: true,
    });
    this.setState({
      canvas: canvas.toDataURL(),
    })
    this.resultRefs.current.appendChild(canvas);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.onClickSnapshot}>capture</button>
        <a download="myImage.jpg" href={this.state.canvas}>Download to myImage.jpg</a>
        <div ref={this.imgRefs}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nsgRjLZntKqK6j0kKjHsYJtQQGsLo27TeDJhy3p85qp9m9WB" />
          {/*<img crossOrigin="Anonymous" src="https://c8.staticflickr.com/8/7492/15644563231_4d682b3c88_n.jpg" alt="The Scream" />*/}
          {/*<img src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png" alt="html2canvas demo"/>*/}
        </div>
        <img src={this.state.canvas} alt="test" />
        <div ref={this.resultRefs} />
      </div>
    );
  }
}

export default App;
