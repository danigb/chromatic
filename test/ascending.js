
var vows = require('vows')
var equal = require('assert').equal
var Chromatic = require('../')

function spell (scales, var1, var2) {
  equal(scales[0].join(' '), var1)
  if (var2) equal(scales[1].join(' '), var2)
}

vows.describe('Chromatic').addBatch({
  'ascending scales': function () {
    spell(Chromatic('C'), 'C Db D Eb E F Gb G Ab A Bb B', 'C C# D D# E F F# G G# A A# B')
    spell(Chromatic('Db'), 'Db D Eb E F Gb G Ab A Bb B C', 'Db Ebb Eb Fb Gbb Gb Abb Ab Bbb Bb Cb Dbb')
    spell(Chromatic('F#'), 'F# G G# A A# B C C# D D# E F', '')
    spell(Chromatic('B'), '')
    spell(Chromatic('C#'), '')
    spell(Chromatic('Db'), '')
    spell(Chromatic('Cb'), '')
    spell(Chromatic('C##'), '')
  }
}).export(module)
