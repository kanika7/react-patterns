import React from 'react';

class Switch extends React.Component {
  render() {
    const { on, onClick } = this.props;
    return (
      <label className="switch" onClick={onClick}>
        <input type="checkbox" checked={on} />
        <span className="slider round" />
      </label>
    );
  }
}

export default Switch;
