import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    update1: PropTypes.func.isRequired,
    delete1: PropTypes.func.isRequired,
  };
  render() {
    const { todos, update1, delete1 } = this.props;
    return (
      <ul className="todo-main">
        {/* 这里有{ return xxxx} */}
        {todos.map((elt) => {
          return (
            <Item key={elt.id} {...elt} update2={update1} detele2={delete1} />
          );
        })}
      </ul>
    );
  }
}
