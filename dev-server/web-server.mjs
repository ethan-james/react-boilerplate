import express from 'express';

export default class WebServer {
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
