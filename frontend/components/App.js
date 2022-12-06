import React from 'react'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className='App'>
       <h2>Todo App</h2> 
       <ul>
        <li>Complete module 1</li>
        <li>Nasreen's play registration</li>
        <li>Reading with Anisa</li>
       </ul>
       <form>
        <input></input>
        <button>Add</button>
       </form>
       <button>Clear</button>
      </div>
    )
  }
}
