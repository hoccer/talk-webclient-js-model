'use strict';

var Backbone = require('backbone');

var DownloadModel = require('./download-model');

module.exports = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.backendUrl = options.backendUrl;
  },
  url: function() {
    return this.backendUrl + '/api/downloads';
  },
  backendUrl: function() {
    return this.backendUrl;
  },
  model: DownloadModel
});
