module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
}
