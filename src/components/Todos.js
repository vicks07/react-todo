import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import PropTypes from 'prop-types';

class Todos extends Component {
   
  render() {
     return this.props.todos.map(todo=>(
        <TodoItem markComplete={this.props.markComplete} key={todo.id} todo={todo}/>
     ));
  }
}

//Proptypes
Todos.PropTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
