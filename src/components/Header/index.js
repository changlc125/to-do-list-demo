import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './index.css';

export default class Header extends Component {
  static propTypes = {
    add1: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return; //nothing happens

    if (target.value.trim() === '') {
      alert('Input should not be blank');
      return; //nothing happens
    }

    const newToDobj = { id: nanoid(), name: target.value, done: false };
    this.props.add1(newToDobj);
    target.value = '';
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="enter a task"
        />
      </div>
    );
  }
}
