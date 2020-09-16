import React from "react";

import Todo from "../projects/Todo"
import TimeOfDay from "../projects/TimeOfDay"


export default function fContent() {
  return (
    <div>
      
      <TimeOfDay />
      <p>App 1 TODO List -</p>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      
    </div>
  );
}
