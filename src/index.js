import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Item = (props) => {
    return (
      <div
        onClick={() => props.toggleItem(props.item.id)}
        className={`item${props.item.purchased ? "completed" : ""}`}
      >
        <p>{props.item.name}</p>
      </div>
    );
  };
  
  export default Item;
ReactDOM.render(<App />, document.getElementById('root'));
