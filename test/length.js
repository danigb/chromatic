
var vows = require('vows')
var equal = require('assert').equal
var throws = require('assert').throws
var Chromatic = require('../')

function spell (scales, var1, var2) {
  equal(scales[0].join(' '), var1)
  if (var2) equal(scales[1].join(' '), var2)
}

vows.describe('Chromatic force length').addBatch({
  'scale length': function () {
    spell(Chromatic('C', null, 4), 'C Db D Eb')
    spell(Chromatic('C', null, 13), 'C Db D Eb E F Gb G Ab A Bb B C')
    spell(Chromatic('C', null, 30), 'C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F Gb G Ab A Bb B C Db D Eb E F')
  },
}).export(module)
