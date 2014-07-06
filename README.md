# hashcash-token
generate tokens that prove you did some work.

easily configure the amount of work proven by each token by requiring the target difficulty to be included in the hash.

# example
``` js
  var hashcashToken = require('hashcash-token')

  //Generate a token.

  var token = hashcashToken.generate({
    difficulty: 10000, // should take, on average, 10000 hashes to generate a valid token
    data: "woot"
  })

  var isValid = hashcashToken.validate(token);
  console.log(isValid); // true

  // Validate the token using constraints

  hashcashToken.validate(token, {
    difficulty: 20000,
    data: "blerp"
  }) // false

  hashcashToken.validate(token, {
    difficulty: 5000 // minimum difficulty. token difficulty just has to be greater than 5000
  }) // true

  var isRareEnough = hashcashToken.validate(token, {
    rarity: 15000
  }) // true sometimes, false sometimes.
```

# methods

```js
  var hashcashToken = require("hashcash-token")
```

## var token = hashcashToken.generate(opts)

options can be: 
* `opts.difficulty` - the number of hashes (on average) it should take to generate the token.
* `opts.data` - the main text body of the token. Maybe you want to issue a challenge token to a user? That'd go here.
* `opts.nonce` - if you for some strange reason want to start searching from a certain nonce, you can specify it here.

and will return a token like 
```js
  { 
    difficulty: 10000,
    data: 'woot',  
    nonce: 5798283827805,
    rarity: 19250.060837947112,
    hash: '0000692aeec5132190df5dcb819ab33590b6a15e46b9348ef41b08758a0d4f5b' 
  }
```
where the hash is sufficiently low. Note that this is a blocking operation that can potentially take a long time.

* `token.rarity` - represents the average number of hashes required to find a hash at least as small as this token's.

## var isValid = hashcashToken.validate(token, constraints)
returns ```true``` or ```false```

constraints: 
* `constraints.difficulty` - the token's difficulty has to be greater than this number.
* `constraints.data` - the token's data must === this. Just a little convenience.
* `constraints.rarity` - the token's rarity must be greater than this number.

# install

With [npm](https://npmjs.org) do:

```
npm install hashcash-token
```

# license

MIT
