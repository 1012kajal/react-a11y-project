// stringCalculator.ts
export function add(input: string): number {
    if (!input) return 0;  // handle empty string
    return input.split(',')
                .map(Number)
                .reduce((sum, num) => sum + num, 0);
  }
  