const message = "nothing to see";

export function greet(name: string): string {
  return `main says: hello to ${name}`;
}
export function add(a: number, b: number): number {
  return a + b;
}
export const meaning: { life: number } = {
  life: 42,
};

console.log(message);
