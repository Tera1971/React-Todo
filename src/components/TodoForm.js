import React from "react";

class TodoForm extends React.Component {

constructor() {
    super();
        this.state = {
            newItem: ""
  };  
}

handleChanges = (e) => {

    console.log(e.target.name, e.target.value);
    this.setState({...this.state, newItem: e.target.value });
};

submitItem = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({ ...this.state, newItem: ""});
};

render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          name="item"
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
