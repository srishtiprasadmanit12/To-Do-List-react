import React, { useState } from "react"

function ToDoItem(props){

const [isDone,setDone]=useState(false);
function handleClick(){
    setDone((prevVal)=>{
        return !prevVal;
    })
}

    return(
        <div onClick={handleClick}>
            <li style={{textDecoration:isDone?"line-through":"none"}}>{props.text}</li>
        </div>
        
    );
}
export default ToDoItem;