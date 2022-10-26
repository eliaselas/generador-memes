import React from "react";
import "../hojas-de-estilo/Header.css";
import trollface from '../imagenes/troll-face.png'

export default function Header() {
  return (
    <header className="header">
      <img
        src={trollface}
        alt="esta es la imagen un troll-face"
        className='header--image'
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Elias</h4>
    </header>
  );
}
