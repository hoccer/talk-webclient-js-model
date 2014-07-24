'use strict';

var Backbone = require('backbone');

var DownloadModel = require('./download-model');

var backendUrl;

module.exports = Backbone.Collection.extend({
  model: DownloadModel,
  url: backendUrl + '/api/downloads',
  initialize: function(models, options) {
    backendUrl = options.backendUrl;
  }
});
