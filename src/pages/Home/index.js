import React from "react";

import Permission from "../../components/Permission";

import "./styles.css";

export default function App() {
  const href = "#";

  return (
    <div className="App">
      <h1>Olá, Lima</h1>
      <Permission required={["admin", "view_user"]}>
        <div>
          <a href={href}>Ver usuarios</a>
        </div>
      </Permission>
      <Permission required={["edit_user"]}>
        <div>
          <a href={href}>Editar usuario</a>
        </div>
      </Permission>
      <Permission required={["view_purchase"]}>
        <div>
          <a href={href}>Ver compras</a>
        </div>
      </Permission>
    </div>
  );
}
