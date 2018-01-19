# doggy-names

[![Travis](https://img.shields.io/travis/ezavile/doggy-names.svg?style=flat-square)](https://travis-ci.org/ezavile/doggy-names)
[![Codecov](https://img.shields.io/codecov/c/github/ezavile/doggy-names.svg?style=flat-square)](https://codecov.io/gh/ezavile/doggy-names)
[![npm](https://img.shields.io/npm/v/doggy-names.svg?style=flat-square)](https://www.npmjs.com/package/doggy-names)

Funny library to get random doggy names
## Installation
```
npm install doggy-names
```

## Usage
```js
var doggyNames = require('doggy-names');

var all = doggyNames.all();
var randomName = doggyNames.random();
var orderedNames = doggyNames.sort();
```

## Testing
This will build scripts, run tests and generate a code coverage report. Anything less than 100% coverage will throw an error.
```javascript
npm test
```

## Contributing
* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`npm test`).

[MIT License]: https://github.com/ezavile/doggy-names/blob/master/LICENSE
