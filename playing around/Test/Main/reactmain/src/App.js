import React, { Component } from 'react';
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";

class App extends Component {
  state = {
    newTask: "",
    todos: [
      {text: 'ReactJs'},
     
    ]
  }

  completeTask = (index) => {
    const todos = [...this.state.todos];
    
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  updateNewTask = (event)=>{
    this.setState({
      newTask: event.target.value
    });
  }

  addTask = ()=>{
    const todos = [...this.state.todos];
    todos.push({
      text: this.state.newTask
    });
    this.setState({
      todos,
      newTask: ''
    });
  }

  render() {
    return (
      <div className="App">
    <CreateTask value={this.state.newTask} 
      onChange={this.updateNewTask} 
      addTask={this.addTask} />

      {this.state.todos.map((todo, index) => 
     <Task todo={todo} completeTask={()=>this.completeTask(index)} key={index} />
              )}
      </div>
    );
  }
}

export default App;
