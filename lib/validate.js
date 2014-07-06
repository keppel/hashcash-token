var hash = require('./hash.js')
var hex = require('./hex.js')

module.exports = function(token, constraints) {
  if (!token || typeof token.difficulty !== "number" || typeof token.nonce !==
    "number" || typeof token.data !== "string" || typeof token.rarity !==
    "number" || typeof token.hash !== "string") {
    return false;
  }

  if (typeof constraints === "object") {
    if (typeof constraints.difficulty === "number" && constraints.difficulty >
      token.difficulty) {
      return false;
    }
    if (constraints.data && constraints.data !== token.data) {
      return false;
    }
    if (typeof constraints.rarity === "number" && constraints.rarity > token.rarity) {
      return false;
    }
  }

  if (token.hash !== hash(token)) {
    return false;
  };

  if (token.rarity !== hex.getHashRarity(token.hash)) {
    return false;
  }

  var target = hex.convertDifficultyToTarget(token.difficulty);
  if (parseInt("0x" + token.hash) < target) {
    return true;
  } else {
    return false;
  }

}