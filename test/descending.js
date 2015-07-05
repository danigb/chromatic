
var vows = require('vows')
var equal = require('assert').equal
var Chromatic = require('../')

function spell (scales, var1, var2) {
  equal(scales[0].join(' '), var1)
  if (var2) equal(scales[1].join(' '), var2)
}

vows.describe('Chromatic').addBatch({
  'descending': function () {
    spell(Chromatic('C', null, 13, true), 'C B Bb A Ab G Gb F E Eb D Db C')
  }
}).export(module)
