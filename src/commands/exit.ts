import { State } from "../state.js";

export async function exitPokedex(state: State) {
  console.log("Closing the Pokedex... Goodbye!");
  state.readlineInterface.close();
  process.exit(0);
}
