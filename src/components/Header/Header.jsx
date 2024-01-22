import React from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <p>Organização</p>
      </div>

      <div className={styles.tarefas}>
        <p onClick={navigate("/")}>Tarefas</p>
      </div>
    </header>
  );
};

export default Header;
