import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {imagenurl} from './imgpoke'

// "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151" -> 1 fetch
// "https://pokeapi.co/api/v2/pokemon/11/" -> 2 fetch (por cada pokemon [1-151])
//https://pokeapi.co/api/v2/pokemon/2/

function Avatar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img
        className='rata'
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
        />
      </div>
      
    </>
  )
}

export default function App () {
  return(
    <div>
      <Avatar/>
    </div>
    )
}


