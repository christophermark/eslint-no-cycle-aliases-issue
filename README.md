## Issue
`eslint-plugin-import` has an issue with aliased imports not being detected by the rule `import/no-cycle`.

## Setup
To get this working, run the following commands:
> `npm install`

### To run eslint
> `node_modules/.bin/eslint .`

## Reproducing the issue
```js
/* main.js */

// import unused from '../exports/exporter'; // <-- Throws a no-cycle error when uncommented
import unused from 'exports/exporter'; // <-- Will not throw a no-cycle error, but it should!

export default function () {
  return;
}
```
