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
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}

class App extends Component {
  onToggle(switchState) {
    console.log(switchState);
  }

  render() {
    return (
      <Toggle onToggle={this.onToggle}>
        {({ on, toggle }) => {
          return (
            <div>
              <Switch on={on} onChange={toggle} />
              <button onClick={toggle}>{on ? 'on' : 'off'}</button>
            </div>
          );
        }}
      </Toggle>
    );
  }
}

export default App;
