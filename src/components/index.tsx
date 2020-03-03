import React, { useContext } from "react";
import Menu from "./Menu";
import Todos from "./Todos";
import Footer from "./Footer";
import { Routes } from "index";
import TextInput from "./TextInput";
import { Container } from "./styles";
import { AppStateContext } from "contexts/AppState";

interface Props {
  path: Routes;
}

const AppBase: React.FC<Props> = ({ path }) => {
  const { todos, setTodos } = useContext(AppStateContext);

  const todoProps = {
    todos,
    setTodos,
    path
  };

  return (
    <Container>
      <section className="todoapp">
        <TextInput />
      </section>

      {todos.length ? (
        <>
          <Todos {...todoProps} />
          <Menu path={path} />
        </>
      ) : null}
      <Footer />
    </Container>
  );
};

export default AppBase;
