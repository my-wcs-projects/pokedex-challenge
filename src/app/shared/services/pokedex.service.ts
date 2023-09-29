import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { pokemons } from '../pokemons-mock';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  getAllPokemon() {
    return pokemons;
  }

  addPokemon(pokemon: Pokemon): void {
    pokemons.push(pokemon);
  }
}
