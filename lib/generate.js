var hex = require('./hex.js')
var validate = require('./validate.js')
var hash = require('./hash.js')
var sha256 = require('sha256')

var NONCE_UPPER_BOUND = 10000000000000;


module.exports = function(opts) {
  var difficulty = opts.difficulty || 1000000;
  var nonce = opts.nonce || Math.floor(Math.random() * NONCE_UPPER_BOUND);
  var data = opts.data || sha256(nonce);

  var token = {
    difficulty: difficulty,
    data: data,
    nonce: nonce
  }

  var target = hex.convertDifficultyToTarget(difficulty)
  do {
    token.nonce++;
    token.hash = hash(token)
  } while (parseInt("0x" + token.hash) > target);

  token.rarity = hex.getHashRarity(token.hash);

  return token;
}