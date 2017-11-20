import React, { Component } from 'react';
import './App.css';

class App extends Component {
  static openFile(e) {
    const input = e.target;
    const reader = new FileReader();

    reader.onload = () => {
      const text = reader.result;
      const node = document.getElementById('output');

      node.innerText = text;
      console.log(reader.result);
      // \n([\w|\s|\'|\.\,]*)\n\n
    }

    reader.readAsText(input.files[0]);
  }
  render() {
    return (
      <div className="App">
        <input type="file" onChange={App.openFile}></input>
        <div id="output">
        </div>
      </div>
    );
  }
}

export default App;
