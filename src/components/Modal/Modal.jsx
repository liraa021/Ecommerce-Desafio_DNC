import React, { useState } from "react";
import styles from "./Modal.module.scss";

const Modal = ({
  showCard,
  handleDelete,
  edit,
  closeCard,
  operation,
  item,
  itemIndex,
}) => {
  const [newTitle, setNewTitle] = useState(undefined);

  return (
    <div
      className={styles.card_container}
      style={{ display: showCard ? "block" : "none" }}
    >
      {operation ? (
        <form
          className={styles.card_content}
          onSubmit={(event) => {
            closeCard(false);
            edit(itemIndex, newTitle);
            event.preventDefault();
          }}
        >
          <h2>Deseja {operation ? "editar" : "excluir"} esse item?</h2>
          <label className={styles.confirmation_message} name="confirmation">
            <input
              className={styles.card_form_description}
              type="text"
              placeholder={item}
              onChange={(event) => setNewTitle(event.target.value)}
              required
            />
          </label>
          <div className={styles.button_grid}>
            <button
              type="button"
              className={styles.buttonN}
              value={false}
              onClick={() => closeCard(false)}
            >
              Não
            </button>
            <button type="submit" className={styles.buttonY}>
              Sim
            </button>
          </div>
        </form>
      ) : (
        <form
          className={styles.card_content}
          onSubmit={(event) => {
            closeCard(false);
            handleDelete(itemIndex);
            event.preventDefault();
          }}
        >
          <h2>Deseja {operation ? "editar" : "excluir"} esse item?</h2>
          <p className={styles.delet_message}>
            <span>{item}</span>
          </p>
          <label className={styles.button_grid}>
            <button
              type="button"
              className={styles.buttonN}
              value={false}
              onClick={() => closeCard(false)}
            >
              Não
            </button>
            <button type="submit" className={styles.buttonY}>
              Sim
            </button>
          </label>
        </form>
      )}
    </div>
  );
};

export default Modal;
