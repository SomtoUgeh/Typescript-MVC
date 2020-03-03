import React, { useContext, useState, useRef, useEffect } from "react";
import { Container } from "./style";
import { Todo, AppStateContext } from "contexts/AppState";

interface Props {
  todoItem: Todo;
}

const Item: React.FC<Props> = ({ todoItem }) => {
  const { id, todo, completed } = todoItem;

  const editInputRef = useRef<HTMLInputElement>(null);

  const [onEdit, setOnEdit] = useState<boolean>(false);
  const { todos, setTodos } = useContext(AppStateContext);

  useEffect(() => {
    if (onEdit === true && editInputRef.current !== null) editInputRef.current.focus();
  }, [onEdit]);

  const onDoubleClick = (): void => setOnEdit(true);

  const toggleCompleted = (id: Todo["id"]): void => {
    const updates: Todo[] = todos.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });

    setTodos(updates);
  };

  const onBlurEdit = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value.trim().length > 0) setOnEdit(false);
    else removeItem(id);
  };

  const handleTodoTextEdit = (e: React.ChangeEvent<HTMLInputElement>, id: Todo["id"]): void => {
    const updates: Todo[] = todos.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          todo: e.target.value
        };
      } else {
        return todo;
      }
    });

    setTodos(updates);
  };

  const removeItem = (selectedId: string): void => {
    const updates: Todo[] = todos.filter(({ id }: Todo) => id !== selectedId);
    setTodos(updates);
  };

  const submitEditText = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" || e.key === "Escape") {
      if (e.currentTarget.value.trim().length > 0) setOnEdit(false);
    }
  };

  // Control Todo's CSS based on complex user interaction
  const SwitchStyle = (completed: Todo["completed"], onEdit: boolean): string => {
    let styleName = "";

    if (onEdit && completed) {
      styleName = "completed editing";
    } else if (onEdit && !completed) {
      styleName = "editing";
    } else if (!onEdit && completed) {
      styleName = "completed";
    } else if (!onEdit && !completed) {
      styleName = "";
    } else {
      styleName = "";
    }

    return styleName;
  };

  return (
    <Container>
      <li className={SwitchStyle(completed, onEdit)}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={completed}
            onChange={() => toggleCompleted(id)}
          />
          <label onDoubleClick={onDoubleClick}>{todo}</label>
          <button className="destroy" onClick={() => removeItem(id)} />
        </div>
        <input
          value={todo}
          className="edit"
          ref={editInputRef}
          onBlur={e => onBlurEdit(e)}
          onKeyPress={e => submitEditText(e)}
          onChange={e => handleTodoTextEdit(e, id)}
        />
      </li>
    </Container>
  );
};

export default Item;
