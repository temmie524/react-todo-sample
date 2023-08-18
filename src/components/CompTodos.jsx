import React from "react";

export const CompTodos = (props) => {
  const { compTodos, onClickBack } = props;
  return (
    <div className="comp-todo">
      <p className="title">完了のTodo</p>
      <ul>
        {compTodos.map((todo, i) => {
          return (
            <div key={todo} className="list-low">
              <li>{todo}</li>
              <button onClick={() => onClickBack(i)}>back!</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
