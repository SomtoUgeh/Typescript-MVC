import React, { useContext } from "react";
import Todos from "./Todos";
import Footer from "./Footer";
import TextInput from "./TextInput";
import { Container } from "./styles";
import { AppStateContext } from "contexts/AppState";

const AppBase: React.FC = () => {
  const { todos, setTodos } = useContext(AppStateContext);

  return (
    <Container>
      <section className="todoapp">
        <TextInput />
      </section>

      {todos.length ? <Todos todos={todos} setTodos={setTodos} /> : null}
      <Footer />
    </Container>
  );
};

export default AppBase;
