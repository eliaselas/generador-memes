import React from "react";
import "../hojas-de-estilo/Header.css";

export default function Header() {
  return (
    <header className="header">
      <img
        src="../imagenes/troll-face.jpeg"
        alt="esta es la imagen un troll-face"
      />
      <h2>Header Componente</h2>
      <h4>React curso </h4>
    </header>
  );
}
