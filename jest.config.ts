import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const jestConfig = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [`node_modules`, `\\.next`, '__tests__'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/testSetup.ts'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};

export default jestConfig;
