var sha256 = require('sha256')
var DELIMITER = "|"

module.exports = function(token) {
  return sha256([token.difficulty, token.data, token.nonce].join(DELIMITER))
}