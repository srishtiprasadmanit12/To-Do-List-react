import React, { useState } from "react";

function App() {    
const [inputText,setInputText]=useState("");
const [AddItems,setAddItem]=useState([]);

function handleClick(){
    setAddItem((item)=>{
        return [...item,inputText];
    })
    setInputText("");

} 

function handleChange(event){
 const newVal=event.target.value;   
setInputText(newVal);
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>    
        <ul>
        {AddItems.map(todoitem=>{
            return <li>{todoitem}</li>
        })}
        </ul>
      </div>
    </div>
  );

}

export default App;
