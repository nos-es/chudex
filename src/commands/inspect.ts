import { State } from "../state.js";

export async function inspectPokemon(state: State, ...args: string[]) {
  if (args.length < 2) {
    console.log("Usage: inspect <pokemon_name>");
    return;
  }
  const pokemonName: string = args[1];
  const foundPokemon = state.pokedex[pokemonName];

  if (!foundPokemon) {
    console.log("you have not caught that pokemon");
    return;
  }

  console.log(`Name: ${foundPokemon.name}
Height: ${foundPokemon.height}
Weight: ${foundPokemon.weight}`);

  console.log("Stats:");
  for (const statEntry of foundPokemon.stats) {
    console.log(` -${statEntry.stat.name}: ${statEntry.base_stat}`);
  }

  console.log("Types:");
  for (const typeEntry of foundPokemon.types) {
    console.log(` - ${typeEntry.type.name}`);
  }
}
