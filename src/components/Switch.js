import React from 'react';

class Switch extends React.Component {
  render() {
    const { on, onClick } = this.props;
    return (
      <label class="switch" onClick={onClick}>
        <input type="checkbox" checked={on} />
        <span class="slider round" />
      </label>
    );
  }
}

export default Switch;
