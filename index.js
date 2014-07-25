'use strict';

module.exports = {
  Model: {
    DownloadCollection: require('./model/download-collection'),
    DownloadModel: require('./model/download-model')
  },
  WebSocket: {
    CollectionUpdater: require('./websocket/collection-updater')
  }
};
