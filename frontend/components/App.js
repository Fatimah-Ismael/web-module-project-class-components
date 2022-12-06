import React from 'react'
import Todo from './Todo';
import TodoList from './TodoList';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, 
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        
      ]
    }
  }
  render() {
    const { todos } =this.state;
    console.log(todos);

    return (
      <div>
       <h2>Todo App</h2> 
       <TodoList todos={todos}/>
       <form>
        <input></input>
        <button>Add</button>
       </form>
       <button>Clear</button>
      </div>
    )
  }
}
