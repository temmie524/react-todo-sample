import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompTodos } from "./components/IncompTodos";
import { CompTodos } from "./components/CompTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompTodos, setIncompTodos] = useState([]);
  const [compTodos, setCompTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //add
  const onClickAdd = () => {
    if (todoText === "") {
      alert("Todo内容を入力してください！");
      return;
    }
    const newTodos = [...incompTodos, todoText];
    setIncompTodos(newTodos);
    setTodoText("");
  };

  //delete
  const onClickDelete = (i) => {
    const newTodos = [...incompTodos];
    newTodos.splice(i, 1);
    setIncompTodos(newTodos);
  };

  //done!
  const onClickComp = (i) => {
    const newIncompTodos = [...incompTodos];
    newIncompTodos.splice(i, 1);
    const newCompTodos = [...compTodos, incompTodos[i]];

    setIncompTodos(newIncompTodos);
    setCompTodos(newCompTodos);
  };

  const onClickBack = (i) => {
    const newCompTodos = [...compTodos];
    newCompTodos.splice(i, 1);
    const newIncompTodos = [...incompTodos, compTodos[i]];

    setIncompTodos(newIncompTodos);
    setCompTodos(newCompTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompTodos.length >= 5}
      />
      {incompTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは五つまでです</p>
      )}
      <IncompTodos
        todos={incompTodos}
        onClickComp={onClickComp}
        onClickDelete={onClickDelete}
      />
      <CompTodos compTodos={compTodos} onClickBack={onClickBack} />
    </>
  );
};
