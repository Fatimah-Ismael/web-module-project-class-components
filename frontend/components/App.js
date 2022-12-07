import React from 'react'
import TodoList from './TodoList';
import Form from './Form'

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
  handleAdd=(name)=>{
    //1.setState
    //2.change todos
    //3.make a copy todos
    //4. add a new todo to the end
    
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state, 
      todos: [...this.state.todos, newTodo]
    });
  }
  handleToggle = ()=> {
    //1. setState
    //2. change todos
    //3. find the todo we clicked on
    //4. flip the value of completed for that todo
    //5. keep all other todos the same
    const clickedId = 1528817084358;
    this.setState({
      ...this.setState,
      todos: this.state.todos.map(todo=> {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  handleClear = ()=> {
    //1. setState
    //2. loop through all todos
    //3. remover all todos that have completed ===true
    //4. save filered todos to state
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo =>{
        return (todo.completed === false);
      })
    })
  }
  render() {
    const { todos } =this.state;
    console.log(todos);

    return (
      <div>
       <h2>Todo App</h2> 
       <TodoList handleToggle={this.handleToggle} todos={todos}/>
       <Form handleAdd={this.handleAdd}  />
       <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
