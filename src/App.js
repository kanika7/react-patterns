import React, { Component } from 'react';
import Switch from './components/Switch';
import './App.css';

class Toggle extends React.Component {
  static On = props => {
    return props.on ? props.children : null;
  };
  static Off = props => {
    return props.on ? null : props.children;
  };
  static Button = ({ on, toggle }) => {
    return <Switch on={on} onChange={toggle} />;
  };

  state = {
    on: false
  };

  toggle = () => {
    this.setState(
      {
        on: !this.state.on
      },
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };

  render() {
    return React.Children.map(this.props.children, childElement => {
      return React.cloneElement(childElement, {
        on: this.state.on,
        toggle: this.toggle
      });
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
        <Toggle.On>Button is ON</Toggle.On>
        <Toggle.Off>Button is OFF</Toggle.Off>
        <Toggle.Button />
      </Toggle>
    );
  }
}

export default App;
