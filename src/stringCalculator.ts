// stringCalculator.ts
export function add(numbers: string): number {
    if (!numbers) return 0; // Empty string
    const nums = numbers.split(',').map(Number);
    if (nums.length === 1) return nums[0]; // Single number
    return nums.reduce((sum, n) => sum + n, 0); // Sum of numbers
  }
  