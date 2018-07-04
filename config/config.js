const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'vr-socketio'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/vr-socketio-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'vr-socketio'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/vr-socketio-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'vr-socketio'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/vr-socketio-production'
  }
};

module.exports = config[env];
