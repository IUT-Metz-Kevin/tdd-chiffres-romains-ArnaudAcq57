import { describe, it, expect } from 'vitest';

class RomanNumeral {
  of(value: string): number {
    if (value === 'I') return 1;
    if (value === 'V') return 5;
    if (value === 'X') return 10;
    return 0;
  }
}

//Write your tests here
