import { State } from "../state.js";

export async function catchPokemon(state: State, ...args: string[]) {
  if (args.length < 2) {
    console.log("Usage: catch <pokemon_name>");
    return;
  }
  const pokemonName = args[1];
  try {
    const pokemon = await state.pokeApi.fetchPokemon(pokemonName);

    console.log(`Throwing a Pokeball at ${pokemon.name}...`);

    const randomCatchmultiplier = Math.random() * (255 - 0) + 0;
    const randomCatchDivider = Math.random() * (255 - 0) + 0;
    const calcIndex =
      (pokemon.base_experience * randomCatchmultiplier) / randomCatchDivider;

    if (calcIndex < randomCatchmultiplier) {
      console.log(`${pokemon.name} escaped`);
      return;
    }
    console.log(`${pokemon.name} catched!`);
    state.pokedex[pokemon.name] = pokemon;
  } catch (err) {
    console.log("There was an issue while catching pokemon");
    if (err instanceof Error) {
      console.log(`Details: ${err.message}`);
    }
  }
}
