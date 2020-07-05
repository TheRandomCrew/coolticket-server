module.exports = {
  testEnvironment: 'node',
  testURL: 'http://localhost',
  collectCoverageFrom: [
    '!node_modules/**',
    'api/**/*.js',
    'service/**/*.js'
  ]
}
