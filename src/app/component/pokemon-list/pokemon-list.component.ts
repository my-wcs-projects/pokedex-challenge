import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] = [];
  @Output() pokemonSelected = new EventEmitter<Pokemon>();

  // Méthode pour sélectionner un Pokémon et émettre un événement
  selectPokemon(pokemon: Pokemon): void {
    this.pokemonSelected.emit(pokemon);
  }
}
