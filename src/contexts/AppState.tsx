import React, { useState, createContext } from "react";

export interface Todo {
  id: string;
  todo: string;
  completed: boolean;
}

export interface AppStateInterface {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

interface Props {
  children: JSX.Element;
}

export const AppStateContext = createContext<AppStateInterface>({} as AppStateInterface);

const AppStateContextProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const value = {
    todos,
    setTodos
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export default AppStateContextProvider;
