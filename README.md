# node-slugify

[![Build Status](https://travis-ci.org/10uei011/node-slugify.svg?branch=master)](https://travis-ci.org/10uei011/node-slugify)
[![Coverage Status](https://coveralls.io/repos/github/10uei011/node-slugify/badge.svg)](https://coveralls.io/github/10uei011/node-slugify)

A simple function which generates friendly url or slugs from string input.

## Installing

```bash
npm i --save node-slugify
```

## Usage

```js
var slugify = require('node-slugify');

console.log(slugify('why is india a great country'));
// returns 'why-is-india-a-great-country'

console.log(slugify('Why is INDIA a great country', { maintainCase: true} ));
// returns 'Why-is-INDIA-a-great-country'

console.log(slugify('why is india a great country'), { replacement: '_'});
// returns 'why_is_india_a_great_country'
```
## Tests

Run `npm test`

