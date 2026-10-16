import { exitPokedex } from "./commands/exit.js";
import { printHelp } from "./commands/help.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

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
  };
}
