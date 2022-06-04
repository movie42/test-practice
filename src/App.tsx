import React from "react";
import TodoItemContainer from "./Components/TodoItemContainer/TodoItemContainer";
import TodoFormContainer from "./Components/TodoFormContainer/TodoFormContainer";

function App() {
  return (
    <div>
      <TodoFormContainer />
      <TodoItemContainer />
    </div>
  );
}

export default App;
