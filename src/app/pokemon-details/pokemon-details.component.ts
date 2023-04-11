import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokémons/donnees-pokemons/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../pokémons/donnees-pokemons/mock-pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemons !: Pokemon[]

  pokemon: any = null; 
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.pokemons = POKEMONS
    let id = this.route.snapshot.params['id']
    for (let i=0;i<this.pokemons.length;i++) {
      if (this.pokemons[i].id === id ) {
        this.pokemon = this.pokemons[i];
      }
    }
  }
}
