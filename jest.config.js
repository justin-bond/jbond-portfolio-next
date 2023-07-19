module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['components/**/*.{js,jsx,ts,tsx}'],
  collectCoverage: true
};