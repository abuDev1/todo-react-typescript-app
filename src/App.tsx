import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import "./styles.css";
import React, { useState } from "react";

export const App: React.FC = () => {
  
  interface StateTodos {
    favorite: boolean,
    text: string,
    done: boolean
  }

  const [todos, setTodos] = useState<Array<StateTodos>>([
    {favorite: false, text: "Купить продукты", done: true}
  ]);

  const [text, setText] = useState<string>("");

  const [check, setCheck] = useState<boolean>(false);

  const deleteTodo = (indexOfDeletedItem: number): void => {
    const filterTodos = todos.filter((todo, index: number): boolean => {
      if (index === indexOfDeletedItem) {
        return false;
      }
      return true;
    });
    setTodos(filterTodos);
  };

  const makeFavorite = (indexOfMakingFavorite: number): void => {
    const newTodos = todos.map((item, index: number): StateTodos => {
      if (index === indexOfMakingFavorite) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const addTodo = (): void => {
    setTodos([{ text: text, favorite: false, done: check }, ...todos]);
    setText("");
    setCheck(false);
  };

  var handleCheck = (): void => {
    setCheck(!check);
  };

  return (
    <div className="App">
      <Header />
      <Form text={text} addTodo={addTodo} setText={setText} />
      <input
        type="checkbox"
        checked={check}
        onChange={() => handleCheck()}
        className="checkbox"
      />
      <span>Mark</span>
      <Todos
        todos={todos}
        makeFavorite={makeFavorite}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
