import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

export function startREPL() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt(true);
  rl.on("line", (line) => {
    const inputs: string[] = cleanInput(line);
    if (inputs.length === 0) {
      rl.prompt(true);
      return;
    }
    console.log(`Your command was: ${inputs[0]}`);
    rl.prompt(true);
  });
}
export function cleanInput(input: string): string[] {
  return input
    .split(" ")
    .map((t) => t.toLowerCase())
    .filter((x) => x != "");
}
