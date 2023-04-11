import { Pokemon  } from "./pokemon";


export const POKEMONS : Pokemon[] = [
    {
        id:1,
        name:'Bulbizzare',
        hp: 25,
        cp:5, 
        picture: 'https://www.pokebip.com/pokedex-images/300/1.png?v=ev2', 
        types: ['Normal','Vol'],
        created :  new Date(),
    },
    {
        id:2,
        name:'Pikachu',
        hp: 50,
        cp:10, 
        picture: 'https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/800px-Pikachu-DEPS.png', 
        types: ['Electrique','Vol'],
        created :  new Date(),
    }
]