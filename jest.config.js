/** @type {import('jest').Config} */

const config = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',

  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^.+\\.svg\\?react$': 'jest-svg-transformer',
    '^.+\\.svg$': 'jest-svg-transformer',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};

export default config;
