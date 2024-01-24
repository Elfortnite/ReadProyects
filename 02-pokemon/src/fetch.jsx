const apiurl='https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'

fetch(apiurl)
    .then(pokemones => {
        if(!pokemones.ok){
            throw new Error (`evia un error en tu : ${pokemones.statusText}`);
        }
        return  pokemones.json();
        })
    