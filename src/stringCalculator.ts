export function add(input: string): number {
  if (!input) return 0;

  let delimiters = [',', '\n'];
  let numbers = input;

  // Check for custom delimiters
  if (input.startsWith('//')) {
    const delimiterSection = input.split('\n')[0].slice(2);

    // Multiple delimiters using [delim] format
    const multiDelimMatch = delimiterSection.match(/\[([^\]]+)\]/g);
    if (multiDelimMatch) {
      delimiters = multiDelimMatch.map(d => d.slice(1, -1));
    } else {
      delimiters = [delimiterSection];
    }

    numbers = input.split('\n').slice(1).join('\n');
  }

  // Build regex to split based on delimiters
  const regex = new RegExp(delimiters.map(d => escapeRegExp(d)).join('|'));
  const nums = numbers.split(regex).map(Number);

  // Throw error for negative numbers
  const negatives = nums.filter(n => n < 0);
  if (negatives.length) throw new Error(`Negatives not allowed: ${negatives.join(',')}`);

  // Ignore numbers greater than 1000
  return nums.filter(n => n <= 1000).reduce((a, b) => a + b, 0);
}

// Escape special regex characters in delimiters
function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
