module.exports = {
  '/api': {
    target: 'http://127.0.0.1:8080',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
    // This removes "/api" from the beginning of the path before sending it to 8080
    rewrite: (path) => path.replace(/^\/api/, '')
  }
};
  