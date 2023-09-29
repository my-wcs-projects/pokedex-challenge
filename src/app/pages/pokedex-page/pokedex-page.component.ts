import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css'],
})
export class PokedexPageComponent {
  pokemons: Pokemon[] = this.pokedexService.getAllPokemon();
  selectedPokemon: Pokemon | null = null;

  constructor(private pokedexService: PokedexService) {}

  onPokemonSelected(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
