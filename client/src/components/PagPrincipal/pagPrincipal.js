import React from "react";
import Nav from "../Nav/Nav";
import style from "./PagPrincipal.module.css";

function PagPrincipal () {
    return (
        <div className={style.total}>
            <Nav/>
            bienvenido a la pagina principal
        </div>
    )
}

export default PagPrincipal;