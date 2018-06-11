# Eeyore.js

> Retrieve your (or someone else's) pinned Github repos!

[![Build Status](https://secure.travis-ci.org/andrewsosa001/Eeyore-js.svg?branch=master)](https://travis-ci.org/andrewsosa001/Eeyore-js)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)


## Installation

```bash
# npm
npm i eeyore

# yarn
yarn add eeyore
```


## Usage

```javascript
var eeyore = require('eeyore');

eeyore('<github_username>').then(repos => {
    // repos = [ ... ]
});
```

###### Example

```javascript
eeyore('andrewsosa').then(console.log)

/*
 [ { repo: 'Contest-Server',
    owner: 'FSU-ACM',
    description: 'Flask suite for running Fall/Spring Programming Contests',
    language: 'Python',
    color: '#3572A5',
    stars: '1',
    forks: '1',
    origin: undefined },
  { repo: 'hackfsu_com',

    ...

    origin: undefined } ]
    */
```


## License

[MIT](LICENSE) © [Andrew Sosa](http://andrewsosa.com)


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-change`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-change`)
5. Create new Pull Request
