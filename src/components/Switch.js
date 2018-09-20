import React from 'react';

class Switch extends React.Component {
  render() {
    const { on, onChange } = this.props;
    return (
      <label className="switch">
        <input type="checkbox" checked={on} onChange={onChange} />
        <span className="slider round" />
      </label>
    );
  }
}

export default Switch;
