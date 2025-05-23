import { describe, it, expect } from "vitest";

class RomanNumeral {
  of(value: string): number {
    const roman: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let total = 0;
    let prev = 0;
    for (let i = value.length - 1; i >= 0; i--) {
      const curr = roman[value[i]];
      if (curr < prev) {
        total -= curr;
      } else {
        total += curr;
      }
      prev = curr;
    }
    return total;
  }
}

//Write your tests here
describe("RomanNumeral", () => {
  const rn = new RomanNumeral();

  it("should return 1 for I", () => {
    expect(rn.of("I")).toBe(1);
  });

  it("should return 4 for IV", () => {
    expect(rn.of("IV")).toBe(4);
  });

  it("should return 5 for V", () => {
    expect(rn.of("V")).toBe(5);
  });

  it("should return 9 for IX", () => {
    expect(rn.of("IX")).toBe(9);
  });

  it("should return 10 for X", () => {
    expect(rn.of("X")).toBe(10);
  });

  it("should return 40 for XL", () => {
    expect(rn.of("XL")).toBe(40);
  });

  it("should return 50 for L", () => {
    expect(rn.of("L")).toBe(50);
  });

  it("should return 90 for XC", () => {
    expect(rn.of("XC")).toBe(90);
  });

  it("should return 100 for C", () => {
    expect(rn.of("C")).toBe(100);
  });

  it("should return 400 for CD", () => {
    expect(rn.of("CD")).toBe(400);
  });

  it("should return 500 for D", () => {
    expect(rn.of("D")).toBe(500);
  });

  it("should return 900 for CM", () => {
    expect(rn.of("CM")).toBe(900);
  });

  it("should return 1000 for M", () => {
    expect(rn.of("M")).toBe(1000);
  });

  it("should return 1987 for MCMLXXXVII", () => {
    expect(rn.of("MCMLXXXVII")).toBe(1987);
  });

  it("should return 3999 for MMMCMXCIX", () => {
    expect(rn.of("MMMCMXCIX")).toBe(3999);
  });
});
