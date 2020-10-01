import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const Todo =[
  {
    name: "Make Bed",
    id: 12345,
    completed: false
  },
  {
    name: "Vaccuum",
    id: 23456,
    completed: false
  },
  {
    name: "Wash Dishes",
    id: 34567,
    completed: false
  },
  {
    name: "Do Laundry",
    id: 45678,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      Todo
    };
  }

  toggleItem = (itemId) => {
    console.log("Toggling item", itemId);
    this.setState({
      Todo: this.state.Todo.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      Todo: [...this.state.Todo, newItem]
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      Todo: this.state.Todo.filter((item) => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to your Todo App!</h1>
          <TodoForm addItem={this.addItem} />
      </div>
      <TodoList
        toggleItem={this.toggleItem}
        groceries={this.state.groceries}
        clearPurchased={this.clearPurchased}
        />
        </div>
      );
    }
  }

  export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

