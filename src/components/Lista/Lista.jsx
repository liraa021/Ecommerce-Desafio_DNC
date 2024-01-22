import React, { useEffect, useState } from "react";

import { IoMdCheckboxOutline, IoMdTrash } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";

import styles from "./Lista.module.scss";
import ListaForm from "../ListaForm/ListaForm";
import Modal from "../Modal/Modal";

const Lista = ({ data }) => {
  const storedToDoList = JSON.parse(localStorage.getItem("storedToDoList"));

  const [tarefas, setTarefas] = useState(storedToDoList || data);

  useEffect(() => {
    localStorage.setItem("storedToDoList", JSON.stringify(tarefas));
  }, [tarefas]);

  const toDoHandler = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  const handleStatus = (status, index) => {
    tarefas[index].completed = status;

    setTarefas([...tarefas]);
  };

  const [card, setCard] = useState(undefined);
  const [itemCalled, setItemCalled] = useState(undefined);
  const [cardOperation, setCardOperation] = useState(undefined);
  const [idCalled, setIdCalled] = useState(undefined);

  const callCard = (value, edit, item, itemIndex) => {
    setItemCalled(item);
    setCard(value);
    setCardOperation(edit);
    setIdCalled(itemIndex);
  };

  const handleDelete = (index) => {
    tarefas.splice(index, 1);

    setTarefas([...tarefas]);
  };

  const handleEdit = (index, newTitle) => {
    tarefas[index].title = newTitle;

    setTarefas([...tarefas]);
  };

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th className={styles.tarefasTop}>Tarefa</th>
            <th className={styles.tarefasTop}>Categoria</th>
            <th className={styles.statusTop}>Status</th>
            <th className={styles.optionsTop}>Opções</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((item, index) => {
            return (
              <tr key={item.id + index}>
                <td className={styles.tarefas}>{item.title}</td>
                <td className={styles.categoria}>{item.category}</td>
                <td className={styles.status}>
                  <label
                    onChange={(event) => {
                      handleStatus(event.target.checked, index);
                    }}
                  >
                    {item.completed ? (
                      <input
                        type="checkbox"
                        name={item.title}
                        style={{ display: "none" }}
                        id={item.title + item.id + index}
                        defaultChecked
                      />
                    ) : (
                      <input
                        type="checkbox"
                        name={item.title}
                        style={{ display: "none" }}
                        id={item.title + item.id + index}
                      />
                    )}

                    {item.completed ? (
                      <IoMdCheckboxOutline size={30} />
                    ) : (
                      <MdCheckBoxOutlineBlank size={30} />
                    )}
                  </label>
                </td>
                <td className={styles.options}>
                  <button
                    onClick={() => callCard(true, true, item.title, index)}
                  >
                    <HiMiniPencilSquare size={30} color="white" />
                  </button>
                  <button
                    onClick={() => callCard(true, false, item.title, index)}
                  >
                    <IoMdTrash size={30} color="white" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>

      <ListaForm formHandler={toDoHandler} listLength={tarefas.length} />

      <Modal
        showCard={card}
        closeCard={callCard}
        handleDelete={handleDelete}
        edit={handleEdit}
        operation={cardOperation}
        item={itemCalled}
        itemIndex={idCalled}
      />
    </div>
  );
};

export default Lista;
