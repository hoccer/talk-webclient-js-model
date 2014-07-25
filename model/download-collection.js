'use strict';

var Backbone = require('backbone');

var DownloadModel = require('./download-model');

module.exports = Backbone.Collection.extend({
  model: DownloadModel,

  initialize: function(models, options) {
    this.backendUrl = options.backendUrl;
  },

  url: function() {
    return this.backendUrl + '/api/downloads';
  }
});
