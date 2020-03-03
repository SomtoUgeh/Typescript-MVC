import React, { useContext } from "react";
import { Routes } from "index";
import { Container } from "./style";
import FilterLink from "./FilterLink";
import { AppStateContext, Todo } from "contexts/AppState";

interface Props {
  path: Routes;
}

const Menu: React.FC<Props> = ({ path }) => {
  const { todos, setTodos } = useContext(AppStateContext);

  const doneCount: number = todos.filter(t => t.completed === true).length;
  const yetCount: number = todos.filter(t => t.completed === false).length;

  const clearCompleted = (): void => {
    const updates: Todo[] = todos.filter((t: Todo) => !t.completed);
    setTodos(updates);
  };

  return (
    <Container>
      <footer className="footer">
        <span className="todo-count">
          <strong>{yetCount}</strong> item left
        </span>

        <FilterLink path={path} />

        {doneCount > 0 && (
          <button onClick={clearCompleted} className="clear-completed">
            Clear completed
          </button>
        )}
      </footer>
    </Container>
  );
};

export default Menu;
