
const fs = require('fs')
const assert = require('assert')
const tv4 = require('tv4')
const load = require('js-yaml').safeLoad
const refParser = require('json-schema-ref-parser')
const official = require('swagger-schema-official/schema')

describe('swagger', () => {
  it('must compatible with OpenAPI', () => {
    const yml = fs.readFileSync(`${__dirname}/../swagger.yml`)
    return refParser.dereference(load(yml))
      .then(schema => tv4.lidate(schema, official))
      .then(valid => assert.ok(valid))
  })
})
