import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
  state = { mouse: false };

  // callback(parameters)  need to return function
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleCheck = (id) => {
    return (event) => {
      this.props.update2(id, event.target.checked);
    };
  };

  handleDelete = (id) => {
    if (window.confirm('Are you sure to delete?')) {
      this.props.detele2(id);
    }
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span> {name} </span>
        </label>
        <button
          className="btn btn-danger"
          onClick={() => {
            return this.handleDelete(id);
          }}
          style={{ display: mouse ? 'block' : 'none' }}
        >
          delete
        </button>
      </li>
    );
  }
}
