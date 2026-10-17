import { exitPokedex } from "./commands/exit.js";
import { printHelp } from "./commands/help.js";
import { listNextMaps } from "./commands/map.js";
import { listPreviousMaps } from "./commands/mapb.js";
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
      description: "Shows next locations",
      callback: listNextMaps,
    },
    mapb: {
      name: "mapb",
      description: "Shows previous locations",
      callback: listPreviousMaps,
    },
  };
}
