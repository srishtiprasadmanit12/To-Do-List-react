import { useState } from "react";
import React from "react";

function Input(props){

    const [inputText,setInputText]=useState("");

    function handleChange(event){
       const newVal=event.target.value;   
       setInputText(newVal);
       }
       
    return (<div className="form">
    <input onChange={handleChange} type="text" value={inputText} />
    <button onClick={()=>{
        props.onAdd(inputText);
        setInputText("");
    }}>
      <span>Add</span>
    </button>
  </div>   );
}
export default Input;