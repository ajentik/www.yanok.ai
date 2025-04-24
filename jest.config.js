/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.[jt]sx?$': ['next/dist/build/swc/jest-transformer', {}]
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node']
};
