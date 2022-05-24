import React, { useState } from "react";

function App() {    
const [inputText,setInputText]=useState("");
const [AddItems,setAddItem]=useState([]);
function handleChange(){
setAddItem(inputText);
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>    
        <ul>
          <li>{inputText}</li>
        </ul>
      </div>
    </div>
  );

}

export default App;
