const test = require('tap').test
const nano = require('nano')
var path = require('path')

const createIndex = require('../')

var url = process.env.COUCH || 'http://localhost:5984'
var dbname = 'couchdb-create-index-test'
var couch = nano(url)
var db = couch.use(dbname)

function clear (callback) {
  couch.db.destroy(dbname, callback)
}

test('configure from json', t => {
  clear(() => {
    createIndex(url + '/' + dbname, path.join(__dirname, 'fixtures', 'simple-index.json'), (error, response) => {
      t.notOk(error, 'no error occured')
      t.equal(response.result, 'created', 'index has been created')
      createIndex(url + '/' + dbname, path.join(__dirname, 'fixtures', 'simple-index.json'), (error, response) => {
        t.notOk(error, 'no error occured')
        t.equal(response.result, 'exists', 'index exists')
        t.end()
      })
    })
  })
})
