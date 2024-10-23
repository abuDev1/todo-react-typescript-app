import React from "react";
import fix from "../assets/fix.svg";
import deleteIcon from "../assets/delete.png";



interface TodosProps {
  todos: any,
  makeFavorite: (e: number) => void,
  deleteTodo: (e: number) => void
}

export const Todos: React.FC<TodosProps> = ({ todos, makeFavorite, deleteTodo }) => {
  return todos.map((todo: any, index: number) => {
    let todoClass = `todo ${todo.favorite ? "selected" : ""}`;
    return (
      <div className={todoClass}>
        <button className="fix" onClick={() => makeFavorite(index)}>
          <img src={fix} alt="" />
          <input type="checkbox" className="checkbox" />
        </button>
        <div className="todo-text">{todo.text}</div>
        <button className="delete" onClick={() => deleteTodo(index)}>
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    );
  });
};
