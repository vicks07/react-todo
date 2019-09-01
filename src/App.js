import React, { Component } from 'react';
import Header from './components/layouts/Header.js';
import AddTodo from './components/AddTodo.js';
import './App.css';
import Todos from './components/Todos.js';

class App extends Component {

  //Toggle Complete
  markComplete = (id)=>{
    this.setState({todos:this.state.todos.map(todo =>{
      if(todo.id===id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }
  delTodo = (id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=> todo.id !== id)]});
  }
  state = {
    todos:[
      {
        id: 1,
        title:'Take out the trash',
        completed:false
      },
      {
        id: 2,
        title:'Dinner with friend',
        completed:true
      },
      {
        id: 3,
        title:'Meeting with boss',
        completed:false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <AddTodo/>
        <Todos markComplete={this.markComplete} todos={this.state.todos} delTodo={this.delTodo}/>
        </div>
        
       {/* <h1>App</h1> */}
      </div>
    );
  }
}

export default App;
