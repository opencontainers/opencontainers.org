# express-data-parser

## Installation

To install it with NPM:

```bash
npm install express-data-parser --save
```

## Configuration

It uses formidable in the back-end, so the configuration options are the same:

[Configuration options for Formidable](https://github.com/felixge/node-formidable#api)

Just pass them as the parameter:

```js
var dataParser = require('express-data-parser');

// ...

app.use(dataParser({
  encoding: 'utf-8',
  uploadDir = "/my/dir"
  // ...
}));
```

## Author & License

[Francisco Presencia Fandos](http://francisco.io/) under the MIT License.
