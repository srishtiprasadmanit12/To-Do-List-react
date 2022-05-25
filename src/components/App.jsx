import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {    
const [inputText,setInputText]=useState("");
const [AddItems,setAddItem]=useState([]);

function handleClick(){
    setAddItem((item)=>{
        return [...item,inputText];
    })
    setInputText("");
} 

function deleteItems(id){
  // console.log("I got clicked");
  setAddItem(prevItem=>{
    return prevItem.filter(
      (item,index)=>{
        return index!==id;
      }
    )
  })
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
        {AddItems.map((todoitem,index)=>(
              <ToDoItem
              key={index} 
              id={index}
              text={todoitem}
              OnChecked={deleteItems}
              />
        ))}
        </ul>
      </div>
    </div>
  );

}

export default App;
