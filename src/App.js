import React, { Component } from 'react';
import Button from './components/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button value="Button" width="100" />
        <Button value="Click" isDisabled="true" width="250"/>
        <Button value="label" width="150" />
      </div>
    );
  }
}

export default App;
