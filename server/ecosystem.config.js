module.exports = {
  apps: [
    {
      name: 'auth-server',
      script: './index.js',
      instances: 'max',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
