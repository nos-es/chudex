import { State } from "../state.js";

export async function exploreLocationPokemon(state: State, ...args: string[]) {
  if (args.length < 2) {
    console.log("Usage: explore <area_name>");
    return;
  }
  const locationName = args[1];
  console.log(`Exploring ${locationName}...`);
  try {
    const response = await state.pokeApi.fetchPokemonByLocation(locationName);

    console.log("Found Pokemon:");
    for (const encounter of response.pokemon_encounters) {
      console.log(`- ${encounter.pokemon.name}`);
    }
  } catch (err) {
    console.log("There was an issue while exploring this area");
    if (err instanceof Error) {
      console.log(`Details: ${err.message}`);
    }
  }
}
