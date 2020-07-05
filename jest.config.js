module.exports = {
  testEnvironment: 'node',
  testURL: 'http://localhost',
  collectCoverageFrom: [
    'index.js',
    '!node_modules/**',
    'api/**/*.js',
    'server/**/*.js',
    'service/**/*.js',
    'util/**/*.js'
  ]
}
