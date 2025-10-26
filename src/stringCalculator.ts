import { describe, it, expect } from 'vitest';
import { add } from './stringCalculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number itself for single number input', () => {
    expect(add("5")).toBe(5);
  });
  
});
// implement add function
export function add(input: string): number {
    if (input === "") return 0;
  
    const numbers = input.split(",").map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  