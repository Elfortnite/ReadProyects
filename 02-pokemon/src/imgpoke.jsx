import { useEffect, useState } from 'react'
import './App.css'

// "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151" -> 1 fetch
// "https://pokeapi.co/api/v2/pokemon/11/" -> 2 fetch (por cada pokemon [1-151])
//https://pokeapi.co/api/v2/pokemon/2/

function Avatar() {
  const [pokemones, setpokemones] = useState([])
   useEffect(()=>{
    const getpokemones = async() =>{

      const reponse= await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      const listapokemones =await reponse.json()
      const {results} = listapokemones

      setpokemones(results)

    }
    getpokemones()
   })
  return (
    <>
      <div>
        <h1>hholas</h1>
        {
          pokemones.map(pokemon => <p>{pokemon.name}</p>)
        }
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


