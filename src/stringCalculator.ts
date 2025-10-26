export function add(input: string): number {
  if (!input) return 0;

  // Reject letters or invalid characters
  if (/[^0-9+\-*/,\n\s//\[\];%*]+/.test(input)) {
    throw new Error("Invalid characters entered!");
  }

  // Arithmetic operators +, -, *, /
  const arithmeticRegex = /[-+*/]/;

  // Handle arithmetic if input contains +, -, *, /
  if (arithmeticRegex.test(input)) {
    try {
      const evalResult = eval(input); // simple eval for arithmetic
      if (evalResult < 0) throw new Error("Negatives not allowed!");
      if (evalResult > 1000) throw new Error("Numbers greater than 1000 are not allowed!");
      return evalResult;
    } catch {
      throw new Error("Invalid arithmetic expression!");
    }
  }

  // Default delimiters
  let delimiters = [',', '\n'];
  let numbersStr = input;

  // Check for custom delimiters
  const customDelimiterMatch = input.match(/^\/\/(.*?)\n(.*)/s);
  if (customDelimiterMatch) {
    const delimiterPart = customDelimiterMatch[1];
    numbersStr = customDelimiterMatch[2];

    // Multiple delimiters
    const multiDelimiterMatch = delimiterPart.match(/\[(.+?)\]/g);
    if (multiDelimiterMatch) {
      delimiters = multiDelimiterMatch.map(d => d.slice(1, -1));
    } else {
      delimiters = [delimiterPart];
    }
  }

  // Build regex for splitting
  const delimiterRegex = new RegExp(delimiters.map(d => escapeRegExp(d)).join('|'), 'g');

  const numbers = numbersStr.split(delimiterRegex).map(n => Number(n));

  // Check negatives
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
  }

  // Check numbers > 1000
  const bigNumbers = numbers.filter(n => n > 1000);
  if (bigNumbers.length > 0) {
    throw new Error(`Numbers greater than 1000 are not allowed: ${bigNumbers.join(', ')}`);
  }

  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
