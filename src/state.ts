import { createInterface, type Interface } from "readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./command_registry.js";
import { PokeAPI, Pokemon } from "./services/pokeapi.js";
import { Cache } from "./pokecache.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readlineInterface: Interface;
  commands: Record<string, CLICommand>;
  pokeApi: PokeAPI;
  pokeCache: Cache;
  nextLocationsURL: string;
  prevLocationsURL: string;
  pokedex: Record<string, Pokemon>;
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
    pokeCache: new Cache(300000),
    nextLocationsURL: "",
    prevLocationsURL: "",
    pokedex: {},
  };
}
