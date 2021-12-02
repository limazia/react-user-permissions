import React from "react";

import Permission from "../../components/Permission";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Olá, Lima</h1>
      <Permission permissionRequired={["view_user"]}>
        <a href="#">Ver usuarios</a>
      </Permission>
      <Permission permissionRequired={["edit_user"]}>
        <a href="#">Editar usuario</a>
      </Permission>
      <Permission permissionRequired={["view_purchase"]}>
        <a href="#">Ver compras</a>
      </Permission>
    </div>
  );
}
