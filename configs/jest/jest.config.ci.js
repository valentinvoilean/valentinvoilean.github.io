const path = require('path');
const jestConfig = require('./jest.config');

const rootPath = path.resolve('.');

const config = Object.assign(jestConfig, {
  testResultsProcessor: path.join(rootPath, 'node_modules/jest-junit')
});

module.exports = config;
