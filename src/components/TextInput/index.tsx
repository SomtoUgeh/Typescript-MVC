import React, { useState, useContext } from "react";
import { Container } from "./style";
import { v4 as uuidv4 } from "uuid";
import { Todo, AppStateContext } from "contexts/AppState";

const TextInput: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const { setTodos } = useContext(AppStateContext);

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && value.trim().length > 0) {
      const todo: Todo = {
        id: uuidv4(),
        todo: value,
        completed: false
      };

      setTodos(todos => [...todos, todo]);
      setValue("");
    }
  };

  return (
    <Container>
      <header className="header">
        <h1>todos</h1>

        <input
          autoFocus
          type="text"
          value={value}
          className="new-todo"
          onKeyPress={e => addTodo(e)}
          placeholder="What needs to be done?"
          onChange={({ target: { value } }) => setValue(value)}
        />
      </header>
    </Container>
  );
};

export default TextInput;
