var sha256 = require('sha256')

var MAX_HASH =
  0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;

exports.convertDifficultyToTarget = function(difficulty) {
  var target = MAX_HASH / difficulty;
  return target;
}

exports.getHashRarity = function(hash) {
  return 1 / (parseInt("0x" + hash) / MAX_HASH);
}