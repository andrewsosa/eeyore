# Eeyore.js
[![Build Status](https://secure.travis-ci.org/andrewsosa001/Eeyore-js.svg?branch=master)](https://travis-ci.org/andrewsosa001/Eeyore-js)
[![Build Status](https://secure.travis-ci.org/andrewsosa001/Eeyore.js.svg?branch=master)](https://travis-ci.org/andrewsosa001/Eeyore.js)
[![Coverage Status](https://coveralls.io/repos/github/andrewsosa001/Eeyore-js/badge.svg?branch=master)](https://coveralls.io/github/andrewsosa001/Eeyore-js?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

A module for retriving JSON of a Github user's pinned repositories with an optional level of caching.

## Installation

```bash
npm install --save eeyore
```

## Usage

#### No Cache
No caching by default.
```javascript
var eeyore = require('eeyore');

eeyore('gh-username').then(repos => {
    // response is a json array
});
```

#### With Cache
Use second parameter to add caching. Options are passed directly to the `node-persist` library, see the docs [here](https://github.com/simonlast/node-persist#options).
```javascript
var eeyore = require('eeyore');

eeyore('gh-username', {
    dir: './tmp/',
    ttl:true
}).then(repos => {
    // response is a json array
});
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

### Help Wanted

Need help improving coverage tests. 

Crafted with <3 by Andrew Sosa ([@andrewsosa001](https://twitter.com/andrewsosa001)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [node generator](https://github.com/yeoman/generator-node).
