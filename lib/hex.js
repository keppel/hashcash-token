var sha256 = require('sha256')

var MAX_HASH =
  0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;

exports.convertDifficultyToTarget = function(difficulty) {
  var target = MAX_HASH / difficulty;
  return target;
}