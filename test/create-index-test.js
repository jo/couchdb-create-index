const test = require('tap').test
const nano = require('nano')
const path = require('path')

const createIndex = require('../')

const url = process.env.COUCH || 'http://localhost:5984'
const dbname = 'couchdb-create-index-test'
const couch = nano(url)
const db = couch.use(dbname)

test('configure from json', t => {
  couch.db.destroy(dbname, () => {
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
