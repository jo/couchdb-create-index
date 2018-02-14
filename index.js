const nanoOption = require('nano-option')
const compile = require('couchdb-compile')
const ensure = require('couchdb-ensure')

module.exports = function createIndex (url, source, callback) {
  const db = nanoOption(url)
  const couch = nanoOption(db.config.url)

  compile(source, { index: true }, (error, index) => {
    if (error) return callback(error)
    
    delete index._id

    ensure(url, error => {
      if (error) return callback(error)

      couch.request({
        method: 'POST',
        path: '_index',
        db: db.config.db,
        body: index
      }, callback)
    })
  })
}
