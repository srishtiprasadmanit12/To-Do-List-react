import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Input  from "./Input";

function App() {    

const [AddItems,setAddItem]=useState([]);

function handleClick(inputText){
    setAddItem((item)=>{
        return [...item,inputText];
    })
   
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

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input  
        onAdd={handleClick}
      />
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
