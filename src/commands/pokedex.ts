import { State } from "../state.js";

export async function showPokedex(state: State) {
  if (Object.keys(state.pokedex).length === 0) {
    console.log("You have not caught any pokemon.");
    return;
  }
  console.log("Your pokedex:");

  for (const pokemon in state.pokedex) {
    console.log(` - ${pokemon}`);
  }
}
