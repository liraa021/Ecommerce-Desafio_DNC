import React, { useState } from "react";
import styles from "./ListaForm.module.scss";

import { AiOutlinePlusSquare } from "react-icons/ai";

const ListaForm = ({ formHandler, listLength }) => {
  const [tarefa, setTarefa] = useState(null);
  const [category, setCategory] = useState("");

  const elementCreate = (value) => {
    const novaTarefa = {
      id: listLength + 1,
      title: value,
      category: category,
      completed: false,
    };

    formHandler(novaTarefa);
    setTarefa(null);
  };

  return (
    <div className={styles.form_container}>
      <form
        className={styles.listaForm}
        onSubmit={(event) => {
          elementCreate(tarefa);

          event.target[0].value = "";
          event.preventDefault();
        }}
      >
        <input
          placeholder="Nova tarefa..."
          type="text"
          name="novatarefa"
          onChange={(event) => setTarefa(event.target.value)}
          required
        />
        <select
          className={styles.select}
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Lazer">Lazer</option>
          <option value="Tarefa doméstica">Tarefa doméstica</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
        </select>

        <button>
          <AiOutlinePlusSquare color="white" size={35} />
        </button>
      </form>
    </div>
  );
};

export default ListaForm;
