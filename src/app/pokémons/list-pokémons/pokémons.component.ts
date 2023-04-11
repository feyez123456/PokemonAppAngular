import { Component,OnInit } from "@angular/core";
import { Pokemon } from "../donnees-pokemons/pokemon";
import { POKEMONS } from "../donnees-pokemons/mock-pokemon";
import { Router } from "@angular/router";
@Component({
    selector:'list-component',
    templateUrl:'./pokémons.component.html'
})
export class PokemonsComponent implements OnInit{
    pokemons !: Pokemon[]
    constructor(private router: Router){}
    ngOnInit(): void {
        this.pokemons = POKEMONS
    }
    
    selectPokemon(pokemon:Pokemon) {
        let link = [ '/pokemon',pokemon.id];
        this.router.navigate(link)
    }
}
