import React, {useState} from 'react';
import '../hojas-de-estilo/Meme.css';
import memesData from '../memesData';
//Componente en el cual se creara el meme
export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"

  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImagen(e) {
    e.preventDefault()
    const memesArray = allMemeImages.data.memes;
    const randomNumber =  Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))

  }
  return (
    <main>
        <form className='form'>
          <input type="text" placeholder='Top text' className='form--input' />
          <input type="text" placeholder='Botton text' className='form--input' />
          <button className='form--button' onClick={getMemeImagen}>Obterner una nueva imagen para meme🖼</button>
        </form>
        <img src={meme.randomImage} className='meme-image' alt='Este es la imagen para el meme'/>
    </main>
  )
}
