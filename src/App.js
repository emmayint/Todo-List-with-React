import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import List from './List'

class App extends Component {
  state = {
    inputValue: 'enter todos here',
    todos: [
      {value: 'Learn React', done: false},
      {value: 'Make an App', done: true }
    ]
  }// put inputValue in App insteat of Form so it can be passed down to List component

  handleClick = (index) => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({todos});
  }
  handleChange= (event) => {
    this.setState( {inputValue : event.target.value} );

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({todos, inputValue: 'enter todos here'}) // not changed by reference?
  }

  render() {
    return (
      <div className="App">
        <p>
          Todo List
        </p>
        <Form
          handleChange= {this.handleChange}
          inputValue= {this.state.inputValue}
          handleSubmit= {this.handleSubmit}
        />
        <List
          handleClick = {this.handleClick}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
