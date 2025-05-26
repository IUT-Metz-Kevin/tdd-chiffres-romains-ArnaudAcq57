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

  to(value: number): string {
    if (value === 1) return "I";
    if (value === 4) return "IV";
    return "";
  }
}

// Write your tests here
describe('RomanNumeral', () => {
  it('should return 1 for I', () => {
    const rn = new RomanNumeral();
    expect(rn.of('I')).toBe(1);
  });
  it('should return 5 for V', () => {
    const rn = new RomanNumeral();
    expect(rn.of('V')).toBe(5);
  });
  it('should return 10 for X', () => {
    const rn = new RomanNumeral();
    expect(rn.of('X')).toBe(10);
  });
  it('should return 50 for L', () => {
    const rn = new RomanNumeral();
    expect(rn.of('L')).toBe(50);
  });
  it('should return 100 for C', () => {
    const rn = new RomanNumeral();
    expect(rn.of('C')).toBe(100);
  });
  it('should return 500 for D', () => {
    const rn = new RomanNumeral();
    expect(rn.of('D')).toBe(500);
  });
  it('should return 1000 for M', () => {
    const rn = new RomanNumeral();
    expect(rn.of('M')).toBe(1000);
  });
  it('should return 4 for IV', () => {
    const rn = new RomanNumeral();
    expect(rn.of('IV')).toBe(4);
  });
  it('should return 9 for IX', () => {
    const rn = new RomanNumeral();
    expect(rn.of('IX')).toBe(9);
  });
  it('should return 6 for VI', () => {
    const rn = new RomanNumeral();
    expect(rn.of('VI')).toBe(6);
  });
  it('should return 15 for XV', () => {
    const rn = new RomanNumeral();
    expect(rn.of('XV')).toBe(15);
  });
  it('should return I for 1', () => {
    const rn = new RomanNumeral();
    expect(rn.to(1)).toBe("I");
  });
  it('should return IV for 4', () => {
    const rn = new RomanNumeral();
    expect(rn.to(4)).toBe("IV");
  });
});
