'use strict';

module.exports = {
  Model: {
    DownloadCollection: require('./model/download-collection'),
    DownloadModel: require('./model/download-model')
  },
  WebSocket: {
    Observer: require('./websocket/observer')
  }
};
