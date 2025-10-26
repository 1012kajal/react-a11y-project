export function add(numbers: string): number {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/; // default delimiters: comma or newline
    let numString = numbers;
  
    // check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(`\\${delimiterMatch[1]}`);
        numString = numbers.slice(4); // remove custom delimiter header
      }
    }
  
    // split numbers using delimiter
    const numArray = numString.split(delimiter).map(Number);
  
    // check for negatives
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) {
      throw new Error(`Negatives not allowed: ${negatives.join(',')}`);
    }
  
    return numArray.reduce((sum, n) => sum + n, 0);
  }
  