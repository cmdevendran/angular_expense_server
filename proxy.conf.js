module.exports = {
  '/api': {
    target: 'http://expense_APISERVER:3000' //'http://127.0.0.1:3000',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
    // This removes "/api" from the beginning of the path before sending it to 8080
    rewrite: (path) => path.replace(/^\/api/, '')
  }
};
  
