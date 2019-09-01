import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js';

class App extends Component {
  markComplete = (id)=>{
    this.setState({todos:this.state.todos.map(todo =>{
      if(todo.id===id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
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
        <Todos markComplete={this.markComplete} todos={this.state.todos}/>
       {/* <h1>App</h1> */}
      </div>
    );
  }
}

export default App;
