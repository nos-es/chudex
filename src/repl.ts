import { State } from "./state.js";

export function startREPL(state: State) {
  const commands = state.commands;
  const rl = state.readlineInterface;

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

    command.callback(state);

    rl.prompt(true);
  });
}
export function cleanInput(input: string): string[] {
  return input
    .split(" ")
    .map((t) => t.toLowerCase())
    .filter((x) => x != "");
}
