# CouchDB Create Index
Create CouchDB index from object from file or directory.

## API

```js
createIndex(url, source[, options], callback)
```

* `url` - CouchDB database URL
* `source` -  Can be a  Couchapp Directory Tree, JSON file or CommonJS/Node module. Please see [couchdb-compile](https://github.com/jo/couchdb-compile) for in depth information about source handling.
* `callback` - called when done with a `response` object describing the status of all operations.

### Example

```js
var createIndex = require('couchdb-create-index')
createIndex('http://localhost:5984/mydb', 'couchdb/index.json', function(error, response) {
  // here we go
})
```

## CLI

```sh
couchdb-create-index URL [SOURCE]
```

When `SOURCE` is omitted, the current directory will be used.


### Example
```sh
couchdb-create-index http://localhost:5984/mydb couchdb/index.json
```

## Tests
```sh
npm test
```


(c) 2018 Johannes J. Schmidt, licensed under Apache-2.0
