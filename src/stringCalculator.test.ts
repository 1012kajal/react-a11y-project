import { describe, it, expect } from 'vitest'; // ← Add this line
import { add } from './stringCalculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number itself for single number input', () => {
    expect(add("5")).toBe(5);
  });
});
