
var vows = require('vows')
var equal = require('assert').equal
var Chromatic = require('../')

function spell (scales, var1, var2) {
  equal(scales[0].join(' '), var1)
  if (var2) equal(scales[1].join(' '), var2)
}

vows.describe('Chromatic notes with octaves').addBatch({
  'with octaves': function () {
    spell(Chromatic('C', 2), 'C2 Db2 D2 Eb2 E2 F2 Gb2 G2 Ab2 A2 Bb2 B2')
    spell(Chromatic('A', 2, 8), 'A2 Bb2 B2 C3 Db3 D3 Eb3 E3')
    spell(Chromatic('F#', 4), 'F#4 G4 G#4 A4 A#4 B4 C5 C#5 D5 D#5 E5 F5')
  }
}).export(module)
