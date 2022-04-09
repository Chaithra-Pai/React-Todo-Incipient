import React, { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import Input from "./Input";

function ToDo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Input edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete
          ? "complete container display border"
          : "container display border"
      }
      key={index}
    >
      <input
        type="checkbox"
        aria-label="checkbox"
        onClick={() => completeTodo(todo.id)}
      />
      <div
        key={todo.id}
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
      >
        {todo.text}
      </div>
      <BsTrashFill
        className="delete-icon"
        onClick={() => removeTodo(todo.id)}
      />
    </div>
  ));
}

export default ToDo;
