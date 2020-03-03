import React from "react";
import Item from "./Item";
import { Routes } from "index";
import { Container } from "./style";
import { Todo } from "contexts/AppState";

interface Props {
  path: Routes;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<Props> = ({ todos, setTodos, path }) => {
  const toggleAllCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const updates: Todo[] = todos.map((t: Todo): Todo => ({ ...t, completed: e.target.checked }));
    setTodos(updates);
  };

  return (
    <Container>
      <section className="main">
        <input
          id="toggle-all"
          type="checkbox"
          className="toggle-all"
          onChange={toggleAllCheckbox}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos
            .filter(({ completed }: Todo): boolean => {
              switch (path) {
                case "/":
                  return true;
                case "/active":
                  return completed === false;
                case "/completed":
                  return completed === true;
                default:
                  return true;
              }
            })
            .map(
              (todo: Todo): JSX.Element => (
                <Item key={todo.id} todoItem={todo} />
              )
            )}
        </ul>
      </section>
    </Container>
  );
};

export default Todos;
