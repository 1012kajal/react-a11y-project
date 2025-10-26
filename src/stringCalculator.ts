// src/stringCalculator.ts
export function add(input: string): number {
    if (input === "") return 0;
  
    // Replace newline with comma and split
    const numbers = input.replace(/\n/g, ",").split(",").map(Number);
  
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  