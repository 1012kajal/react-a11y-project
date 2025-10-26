// src/stringCalculator.test.ts
import { describe, it, expect } from 'vitest';
import { add } from './stringCalculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number itself for single number input', () => {
    expect(add("5")).toBe(5);
  });

  it('should return sum of two numbers separated by comma', () => {
    expect(add("1,2")).toBe(3);
  });

  it('should return sum of multiple numbers separated by comma', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  it('should handle newline as a separator', () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
