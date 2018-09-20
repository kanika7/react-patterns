import React, { Component } from 'react';
import Switch from './components/Switch';
import './App.css';

const ToggleContext = React.createContext();

class Toggle extends React.Component {
  static On = ({ children }) => {
    return (
      <ToggleContext.Consumer>
        {contextValue => (contextValue.on ? children : null)}
      </ToggleContext.Consumer>
    );
  };
  static Off = ({ children }) => {
    return (
      <ToggleContext.Consumer>
        {contextValue => (contextValue.on ? null : children)}
      </ToggleContext.Consumer>
    );
  };
  static Button = ({ toggle }) => {
    return (
      <ToggleContext.Consumer>
        {contextValue => (
          <Switch on={contextValue.on} onChange={contextValue.toggle} />
        )}
      </ToggleContext.Consumer>
    );
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

  state = {
    on: false,
    toggle: this.toggle
  };

  render() {
    return (
      <ToggleContext.Provider value={this.state}>
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

class App extends Component {
  onToggle(switchState) {
    console.log(switchState);
  }

  render() {
    return (
      <Toggle onToggle={this.onToggle}>
        <Toggle.On>Button is ON</Toggle.On>
        <Toggle.Off>Button is OFF</Toggle.Off>
        <div>
          <Toggle.Button />
        </div>
      </Toggle>
    );
  }
}

export default App;
