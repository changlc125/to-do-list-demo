import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAll(event.target.checked);
  };

  handleClearAllDone = () => {
    this.props.clearAll();
  };

  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((prev, task) => {
      return prev + (task.done ? 1 : 0);
    }, 0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <input
          type="checkbox"
          onChange={this.handleCheckAll}
          checked={doneCount === total && total !== 0 ? true : false}
        />
        <span>
          <span>done {doneCount}</span> /total {total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>
          {' '}
          delete all tasks
        </button>
      </div>
    );
  }
}
