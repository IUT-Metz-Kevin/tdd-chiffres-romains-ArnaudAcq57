import { describe, it, expect } from 'vitest';

class RomanNumeral {
  of(value: string): number {
    if (value === 'IV') return 4;
    if (value === 'IX') return 9;
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

//Write your tests here
