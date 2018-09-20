import React, { Component } from 'react';
import Switch from './components/Switch';
import './App.css';

class Toggle extends React.Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState(
      currentState => {
        return {
          on: !currentState.on
        };
      },
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };

  render() {
    return <Switch on={this.state.on} onChange={this.toggle} />;
  }
}

class App extends Component {
  onToggle(switchState) {
    console.log(switchState);
  }

  render() {
    return <Toggle onToggle={this.onToggle} />;
  }
}

export default App;
