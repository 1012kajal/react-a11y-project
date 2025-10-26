export function add(input: string): number {
  if (!input) return 0;

  let delimiters = [",", "\n"];
  let numbersPart = input;

  // Check for custom delimiter
  const customDelimiterMatch = input.match(/^\/\/(.+)\n/);
  if (customDelimiterMatch) {
    const customDelimiters = customDelimiterMatch[1]
      .split(/[\[\]]+/)
      .filter((d) => d);
    delimiters = delimiters.concat(customDelimiters);
    numbersPart = input.slice(customDelimiterMatch[0].length);
  }

  // Replace all delimiters with comma for easier splitting
  const delimiterRegex = new RegExp(delimiters.map(d => escapeRegExp(d)).join("|"), "g");
  const tokens = numbersPart.split(delimiterRegex).map(t => t.trim());

  const negatives: number[] = [];
  let sum = 0;

  for (let token of tokens) {
    if (!token) continue;

    // Check for arithmetic operators
    if (/^[+\-*/0-9]+$/.test(token)) {
      try {
        const value = eval(token); // safe for simple arithmetic
        if (value < 0) negatives.push(value);
        if (value <= 1000) sum += value;
      } catch {
        throw new Error("Invalid arithmetic expression!");
      }
    } else {
      throw new Error("Invalid arithmetic expression!");
    }
  }

  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(",")}`);
  }

  return sum;
}

// Helper to escape regex special characters
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
