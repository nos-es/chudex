export function cleanInput(input: string): string[] {
  return input
    .split(" ")
    .map((t) => t.toLowerCase())
    .filter((x) => x != "");
}
