export function add(numbers: string): number {
    if (!numbers) return 0;
  
    // Replace newline with comma to handle both separators
    numbers = numbers.replace(/\n/g, ',');
  
    return numbers
      .split(',')
      .map(Number)
      .reduce((sum, num) => sum + num, 0);
  }
  