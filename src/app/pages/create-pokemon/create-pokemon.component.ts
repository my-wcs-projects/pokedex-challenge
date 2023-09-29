import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css'],
})
export class CreatePokemonComponent implements OnInit {
  pokemonForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private pokedexService: PokedexService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pokemonForm = this.fb.group({
      nom: ['', Validators.required],
      image: ['', Validators.required],
      description: [''],
    });
  }

  onSubmit() {
    if (this.pokemonForm.valid) {
      const { nom, image, description } = this.pokemonForm.value;
      const newPokemon = new Pokemon(nom, image, description);
      this.pokedexService.addPokemon(newPokemon);
      this.router.navigate(['/']);
      this.pokemonForm.reset();
    } else {
      this.pokemonForm.markAllAsTouched();
    }
  }
}
