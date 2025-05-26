import { describe, it, expect } from 'vitest';

class RomanNumeral {
  of(value: string): number {
    if (value === 'I') return 1;
    return 0;
  }
}

//Write your tests here
