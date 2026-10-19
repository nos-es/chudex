import { State } from "../state.js";

export async function catchPokemon(state: State, ...args: string[]) {
  if (args.length < 2) {
    console.log("Usage: catch <pokemon_name>");
    return;
  }
  const pokemonName = args[1];
  console.log(`Throwing a pokeball at ${pokemonName}...`);
  try {
    const pokemon = await state.pokeApi.fetchPokemon(pokemonName);
    const randomCatchmultiplier = Math.random() * (255 - 0) + 0;
    const randomCatchDivider = Math.random() * (255 - 0) + 0;
    const calcIndex =
      (pokemon.base_experience * randomCatchmultiplier) / randomCatchDivider;

    if (calcIndex < randomCatchmultiplier) {
      console.log(`${pokemonName} escaped`);
      return;
    }
    console.log(`${pokemonName} catched!`);
  } catch (err) { }
}
