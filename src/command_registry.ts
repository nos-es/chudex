import { exitPokedex } from "./commands/exit.js";
import { printHelp } from "./commands/help.js";
import { listMaps } from "./commands/map.js";
import { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: exitPokedex,
    },
    help: {
      name: "help",
      description: "Shows usage",
      callback: printHelp,
    },
    map: {
      name: "map",
      description: "Shows locations",
      callback: listMaps,
    },
  };
}
