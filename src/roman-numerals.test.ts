import { describe, it, expect } from 'vitest';

class RomanNumeral {
  of(value: string): number {
  let result = 0;

    if (value.length === 1) {
      if (value[0] === 'I') result += 1;
      if (value[0] === 'V') result += 5;
      if (value[0] === 'X') result += 10;
      if (value[0] === 'L') result += 50;
      if (value[0] === 'C') result += 100;
      if (value[0] === 'D') result += 500;
      if (value[0] === 'M') result += 1000;
    }

    if (value.length === 2) {
      if (value[0] === 'I' && value[1] === 'V') result += 4;
      else if (value[0] === 'I' && value[1] === 'X') result += 9;
      else {
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
      }
    }
    return result;
  }
}
//Write your tests here
describe('RomanNumeral', () => {
  const rn = new RomanNumeral();

  it('should return 1 for I', () => {
    expect(rn.of('I')).toBe(1);
  });

  it('should return 4 for IV', () => {
    expect(rn.of('IV')).toBe(4);
  });

  it('should return 5 for V', () => {
    expect(rn.of('V')).toBe(5);
  });

  it('should return 9 for IX', () => {
    expect(rn.of('IX')).toBe(9);
  });

  it('should return 10 for X', () => {
    expect(rn.of('X')).toBe(10);
  });

  it('should return 40 for XL', () => {
    expect(rn.of('XL')).toBe(40);
  });

  it('should return 50 for L', () => {
    expect(rn.of('L')).toBe(50);
  });

  it('should return 90 for XC', () => {
    expect(rn.of('XC')).toBe(90);
  });

  it('should return 100 for C', () => {
    expect(rn.of('C')).toBe(100);
  });

  it('should return 400 for CD', () => {
    expect(rn.of('CD')).toBe(400);
  });

  it('should return 500 for D', () => {
    expect(rn.of('D')).toBe(500);
  });

  it('should return 900 for CM', () => {
    expect(rn.of('CM')).toBe(900);
  });

  it('should return 1000 for M', () => {
    expect(rn.of('M')).toBe(1000);
  });

  it('should return 1987 for MCMLXXXVII', () => {
    expect(rn.of('MCMLXXXVII')).toBe(1987);
  });

  it('should return 3999 for MMMCMXCIX', () => {
    expect(rn.of('MMMCMXCIX')).toBe(3999);
  });
});
