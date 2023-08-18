import React from "react";

export const IncompTodos = (props) => {
  const { todos, onClickComp, onClickDelete } = props;
  return (
    <div className="incomp-todo">
      <p className="title">未完了のTodo</p>
      <ul>
        {todos.map((todo, i) => {
          return (
            <div key={todo} className="list-low">
              <li>{todo}</li>
              <button onClick={() => onClickComp(i)}>done!</button>
              <button onClick={() => onClickDelete(i)}>delete!</button>
            </div> //👆引数を渡すとその場で実行されるのでアロー関数で結ぶ
          );
        })}
      </ul>
    </div>
  );
};
