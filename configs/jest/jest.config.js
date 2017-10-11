const path = require('path');

module.exports = {
  rootDir: path.resolve('.'),
  setupTestFrameworkScriptFile: '<rootDir>/tests/setupTestFramework.js',
  setupFiles: ['raf/polyfill', '<rootDir>/tests/setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    'Raven|redactor': '<rootDir>/tests/mocks/moduleMock.js'
  },
  globals: {
    __DEV_TOOLS__: true
  },
  moduleDirectories: ['src', 'node_modules', 'web_modules'],
  coverageDirectory: '<rootDir>/build/reports/tests/coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/src/ui']
};
