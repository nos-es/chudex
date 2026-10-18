import { State } from "../state.js";

export async function exploreLocationPokemon(state: State, ...args: string[]) {
  const response = await state.pokeApi.fetchPokemonByLocation(args[1]);

  for (const entry of response.pokemon_encounters) {
    console.log(entry.pokemon.name);
  }
}
