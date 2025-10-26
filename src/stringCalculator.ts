export function add(numbers: string): number {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/;
    let numString = numbers;
  
    // Check for custom single-character delimiter
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].substring(2));
      numString = parts.slice(1).join("\n");
    }
  
    const nums = numString.split(delimiter).map(Number);
    return nums.reduce((sum, n) => sum + n, 0);
  }