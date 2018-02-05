const express = require('express');

class WebServer {
  constructor () {
    this.app = express();
    this.app.use(express.static('.'));
  }
  start () {
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(3000, function () {
          resolve();
        })
      } catch (e) {
        console.error(e);
        reject(e);
      }
    })
  }

  stop () {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve();
        })
      } catch (e) {
        console.error(e.message);
        reject(e);
      }
    })
  }
}

let webServer = new WebServer();

webServer.start()
  .then(() => {
    console.log('Web server started!');
  })
  .catch(err => {
    console.error(err);
    console.error('Failed to start web server');
  });

module.exports = {WebServer};