module.exports = {
  Model: {
    DownloadCollection: require('./model/download-collection.js'),
    DownloadModel: require('./model/download-model.js')
  },
  WebSocket: {
    CollectionUpdater: require('./websocket/collection-updater.js')
  }
};
