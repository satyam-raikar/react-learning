import React from "react";

export default function todo(props) {
  return (
    <div className="todo-list">

      <div className="todo-item">
        <input type="checkbox" checked={props.status}/>
        <p>Task - {props.task}</p>
      </div>
    
    </div>
  );
}
