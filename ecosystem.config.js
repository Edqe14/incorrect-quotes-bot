module.exports = {
  apps: [
    {
      name: 'incorrect-quotes',
      script: './dist/index.js',
      max_memory_restart: '150M',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
