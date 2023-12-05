const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/__tests__/singleton.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@app/(.*)$': '<rootDir>/app/$1',
    '^@prisma/(.*)$': '<rootDir>/prisma/$1',
    '^@recoil/(.*)$': '<rootDir>/recoil/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@libs/(.*)$': '<rootDir>/libs/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@type/(.*)$': '<rootDir>/types/$1',
    '^@assets/(.*)$': '<rootDir>/assets/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@backend/(.*)$': '<rootDir>/backend/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
