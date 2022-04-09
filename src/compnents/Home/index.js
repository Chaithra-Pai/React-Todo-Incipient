import React from "react";
import TodoList from "./TodoList";
import Header from "../Header";

function index() {
  return (
    <>
      <Header />
      <div className="col-md-6 offset-md-3 mt-5">
        <TodoList />
      </div>
    </>
  );
}

export default index;
