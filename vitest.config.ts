import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      enabled: true,
      include: ['src/**'],
      reportsDirectory: 'coverage',
      exclude: ['node_modules/**', 'dist/**'],
      reporter: ['json-summary', 'text', 'lcov']
    },
    // Uncomment the below lines if you would like to enforce a coverage threshold
    // for your action. This will fail the build if the coverage is below the
    // specified thresholds.
    // coverageThreshold: {
    //   global: {
    //     branches: 100,
    //     functions: 100,
    //     lines: 100,
    //     statements: 100
    //   }
    // },
    reporters: ['verbose', 'github-actions'],
    environment: 'node',
    include: ['**/*.test.ts'],
    exclude: ['dist/**', 'node_modules/**']
  }
})
