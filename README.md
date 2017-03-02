# Eeyore.js [![Build Status](https://secure.travis-ci.org/andrewsosa001/Eeyore-js.svg?branch=master)](https://travis-ci.org/andrewsosa001/Eeyore-js)
[![Build Status](https://secure.travis-ci.org/andrewsosa001/Eeyore.js.svg?branch=master)](https://travis-ci.org/andrewsosa001/Eeyore.js)
[![Coverage Status](https://coveralls.io/repos/github/andrewsosa001/Eeyore-js/badge.svg?branch=master)](https://coveralls.io/github/andrewsosa001/Eeyore-js?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

A module for retriving JSON of a Github user's pinned repositories with an optional level of caching.

## Installation

```bash
npm install --save eeyore
```

## Usage

```javascript
var eeyore = require('eeyore')

eeyore('<gh-username>').then(/*...*/);
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by Andrew Sosa ([@andrewsosa001](https://twitter.com/andrewsosa001)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
