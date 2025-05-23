import { defaultExclude, defineConfig } from 'vitest/config.js';

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.test.ts'],
  },
});
