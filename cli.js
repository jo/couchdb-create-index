#!/usr/bin/env node

const secure = require('./')

const args = process.argv.slice(2)

if (!args.length) {
  console.log('Usage: \ncouchdb-create-index URL [SOURCE]')
  process.exit()
}

const url = args[0]
const source = args[1] || process.cwd()

secure(url, source, (error, response) => {
  if (error) return console.error(error)

  console.log(JSON.stringify(response, null, '  '))
})
