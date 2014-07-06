var hashcashToken = require('../index.js')

//Generate a token.

var token = hashcashToken.generate({
  difficulty: 10000, // should take, on average, 10000 hashes to generate a valid token
  data: "woot"
})
console.log(token);
/*
	{ 
		difficulty: 10000,
  	data: 'woot',  
  	nonce: 5798283827805,
  	hash: '0000692aeec5132190df5dcb819ab33590b6a15e46b9348ef41b08758a0d4f5b' 
  }
*/
var isValid = hashcashToken.validate(token);
console.log(isValid); // true

// Validate the token using constraints

hashcashToken.validate(token, {
  difficulty: 20000
}) // false

hashcashToken.validate(token, {
  difficulty: 5000 // minimum. token difficulty just has to be greater than 5000
}) // true

hashcashToken.validate(token, {
  data: "bloop"
}) // false

var isRareEnough = hashcashToken.validate(token, {
  rarity: 15000
}) // true sometimes, false sometimes.
console.log(isRareEnough)