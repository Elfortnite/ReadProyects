export function imagenurl(pokemon,size='s'){
    return(
        'https://pokeapi.co/api/v2/pokemon/19/'+
        pokemon.imageId +
        size +
        '.png'
    );
}