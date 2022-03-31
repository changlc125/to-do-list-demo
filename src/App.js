import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
  state = {
    tasks: [
      { id: '001', name: 'sleeping', done: true },
      { id: '002', name: 'showing', done: false },
      { id: '003', name: 'shopping', done: true },
    ],
  };

  // add a task
  addToDo = (taskObj) => {
    const { tasks } = this.state;
    const newTasks = [taskObj, ...tasks];
    this.setState({ tasks: newTasks });
  };

  // update a task
  updateToDo = (id, done) => {
    const { tasks } = this.state;
    const newTasks = tasks.map((elt) => {
      if (elt.id === id) return { ...elt, done };
      else return elt;
    });
    this.setState({ tasks: newTasks });
  };

  //delete a task with a specific id
  deleteToDo = (id) => {
    const { tasks } = this.state;
    const newTasks = tasks.filter((elt) => {
      return elt.id !== id;
    });
    this.setState({ tasks: newTasks });
  };

  //check all tasks: Footer checkebox status：done => all selected or all not selected
  checkAllToDo = (done) => {
    const { tasks } = this.state;
    const newTasks = tasks.map((elt) => {
      return { ...elt, done: done };
    });
    this.setState({ tasks: newTasks });
  };

  //uncheck all tasks：filter =>leave true
  clearAllDone = () => {
    const { tasks } = this.state;
    const newTasks = tasks.filter((elt) => {
      return !elt.done;
    });
    this.setState({ tasks: newTasks });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header add1={this.addToDo} />
          <List
            todos={tasks}
            update1={this.updateToDo}
            delete1={this.deleteToDo}
          />
          <Footer
            todos={tasks}
            checkAll={this.checkAllToDo}
            clearAll={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
