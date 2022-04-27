import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={style.total}>
      <div className={style.totalBTN}>
        <Link to="/LogIn" className={style.btn}> inicia sesion </Link>
        <Link to="/SingIn" className={style.btn}> crea tu cuenta </Link>
      </div>
    </header>
  );
}
