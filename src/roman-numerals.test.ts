import { describe, it, expect } from 'vitest';

class RomanNumeral {
  of(value: string): number {
    if (value === 'IV') return 4;
    if (value === 'IX') return 9;
    if (value.length === 2) {
      let result = 0;
      if (value[0] === 'I') result += 1;
      if (value[0] === 'V') result += 5;
      if (value[0] === 'X') result += 10;
      if (value[0] === 'L') result += 50;
      if (value[0] === 'C') result += 100;
      if (value[0] === 'D') result += 500;
      if (value[0] === 'M') result += 1000;

      if (value[1] === 'I') result += 1;
      if (value[1] === 'V') result += 5;
      if (value[1] === 'X') result += 10;
      if (value[1] === 'L') result += 50;
      if (value[1] === 'C') result += 100;
      if (value[1] === 'D') result += 500;
      if (value[1] === 'M') result += 1000;
      return result;
    }
    if (value === 'I') return 1;
    if (value === 'V') return 5;
    if (value === 'X') return 10;
    if (value === 'L') return 50;
    if (value === 'C') return 100;
    if (value === 'D') return 500;
    if (value === 'M') return 1000;
    return 0;
  }
}

// Write your tests here
describe('RomanNumeral', () => {
  it('should return 1 for I', () => {
    const rn = new RomanNumeral();
    expect(rn.of('I')).toBe(1);
  });
});
