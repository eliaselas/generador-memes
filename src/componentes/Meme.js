import React, {useState} from 'react';
import '../hojas-de-estilo/Meme.css';
import memesData from '../memesData';

export default function Meme() {
  const [memeImage, setMemeImage] = useState('');
  function getMemeImagen(e) {
    e.preventDefault()
    const memesArray = memesData.data.memes;
    const randomNumber =  Math.floor(Math.random() * memesArray.length)
    //const  url = memesArray[randomNumber].url
    setMemeImage(memesArray[randomNumber].url)

  }
  return (
    <main>
        <form className='form'>
          <input type="text" placeholder='Top text' className='form--input' />
          <input type="text" placeholder='Botton text' className='form--input' />
          <button className='form--button' onClick={getMemeImagen}>Obterner una nueva imagen para meme🖼</button>
        </form>
        <img src={memeImage} className='meme-image' alt='Este es la imagen para el meme'/>
    </main>
  )
}
