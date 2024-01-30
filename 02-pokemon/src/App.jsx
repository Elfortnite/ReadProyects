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

      const pokemones= results.map(async(pokemon)=>{
        const reponse = await fetch (pokemon.url)
        const poke = await reponse.json()


        return{
          id: poke.id,
          name:poke.name,
          img: poke.sprites.other.dream_world.front_dafault
        }
      })
      setpokemones(await Promise.all(newopokemones))
    }
   
    getpokemones()
   },[])
  return (
    <>
      <div>
        <h1>hholas</h1>
        {
          pokemones.map(pokemon =>{
            return(
              <div>
                <img src={pokemon.img} alt={pokemon.name}/>
                <p>{pokemon.name}</p>
                <span>{pokemon.id}</span>
              </div>
          )
          })
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


