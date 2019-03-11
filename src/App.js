import React, { Component } from 'react';
import Select from './components/Select';

class App extends Component {
  state = {
    options: ["Mobile - India", "Internet - India" , "Marketplaces" , "Mobile Payment"],
    defaultValue: "Marketplaces"
  }

  render() {
    return (
      <div className="App">
        <Select options={this.state.options} defaultValue={this.state.defaultValue}/>
      </div>
    );
  }
}

export default App;
