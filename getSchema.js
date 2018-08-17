var fs = require('fs');
var path = require('path');

exports.getSchema = function(version, callback) {
  fs.readFile(path.join(__dirname, version, 'schema.graphql'), 'utf8', callback);
};
