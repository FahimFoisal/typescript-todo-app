import React, { useState } from 'react';
import './App.css';


function App() {
  const deleteItem = (index:string) => {
    todoList.splice(parseInt(index),1);
    setTodoList([...todoList]);
  }
  const [addToList, setList] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const addList = () => {
    setTodoList([...todoList,addToList]);
  }
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setList(e.currentTarget.value)
  }
  return (
    <div className="App">
      <div className="container">
        <h2>Todo List</h2>
        <div className="inputField">
          <input type="text" name="task" id="task" value="" onKeyUp={handleInput} placeholder="Enter Your Tasks"/>
          <button className="btn"><i className="fas fa-plus" onClick={addList}></i></button>
        </div>
        <ul className="todoListBody">
          {
            todoList.map((item:string,index:number) => <li>{item} <span onClick={() => deleteItem(`${index}`)}><i className="fas fa-trash-alt"></i></span></li>)
          }
        </ul>
        <div className="list-reset">
          <span>You've {todoList.length} pending tasks</span>
          <button className="btn" onClick={() => setTodoList([])}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
