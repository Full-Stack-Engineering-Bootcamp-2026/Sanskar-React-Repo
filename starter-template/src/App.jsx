import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Colour from './components/Colour'

function App() {
  const colors = ["black","red","orange","yellow","blue","green"]

  return (
    <ol className='colors-list'>
      {colors.map((color,index)=>
        // return <Colour key={index} color={color}/>
         {return <Colour key={index} color={color}/>} 
      )}
    </ol>
  )
}

export default App
