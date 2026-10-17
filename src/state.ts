import { createInterface, type Interface } from "readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./services/pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readlineInterface: Interface;
  commands: Record<string, CLICommand>;
  pokeApi: PokeAPI;
  nextLocationsURL: string;
  prevLocationsURL: string;
};

export function initState(): State {
  return {
    readlineInterface: createInterface({
      input: stdin,
      output: stdout,
      prompt: "Pokedex > ",
    }),
    commands: getCommands(),
    pokeApi: new PokeAPI(),
    nextLocationsURL: "",
    prevLocationsURL: "",
  };
}
