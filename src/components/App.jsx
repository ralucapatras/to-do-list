import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = useState(" ");
  const [text, setText] = useState([]);

  function handleChange(event) {
    //console.log(event.target.value);
    setItem(event.target.value);
  }

  function handleSubmit() {
    // event.preventDefault();

    setText((prevVal) => {
      return [...prevVal, [item]];
    });
    setItem(" ");
  }

  function deleteItem(id) {
    //console.log("delete");

    setText((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button type="submit" onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {text.map((todoList, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={todoList}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
