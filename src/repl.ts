import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./command_registry.js";

export function startREPL() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });

  const commands = getCommands();

  rl.prompt(true);
  rl.on("line", (line) => {
    const inputs: string[] = cleanInput(line);
    if (inputs.length === 0) {
      rl.prompt(true);
      return;
    }
    const command = commands[inputs[0]];

    if (command === undefined) {
      console.log("Unknown command");
      rl.prompt(true);
      return;
    }

    command.callback(commands);

    rl.prompt(true);
  });
}
export function cleanInput(input: string): string[] {
  return input
    .split(" ")
    .map((t) => t.toLowerCase())
    .filter((x) => x != "");
}
