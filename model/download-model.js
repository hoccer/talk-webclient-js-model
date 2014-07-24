'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  idAttribute: 'clientDownloadId',

  fileUrl: function() {
    return this.collection.backendUrl + '/' + this.get('dataFile');
  }
});
