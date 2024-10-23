import React from "react";

interface FormProps {
  text: string,
  setText: (value: string) => void,
  addTodo: () => void
}

export const Form: React.FC<FormProps> = ({ text, addTodo, setText }) => {
  return (
    <div className="forms">
      <input
        type="text"
        placeholder="Add todo ..."
        className="addTodo"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <button className="addButton" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};
