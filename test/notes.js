
var vows = require('vows')
var equal = require('assert').equal
var throws = require('assert').throws
var Chromatic = require('../')

function spell (scales, var1, var2) {
  equal(scales[0].join(' '), var1)
  if (var2) equal(scales[1].join(' '), var2)
}

vows.describe('Chromatic notes').addBatch({
  'normalize root': function () {
    spell(Chromatic('g'), 'G Ab A Bb B C Db D Eb E F Gb')
    spell(Chromatic('dB'), 'Db D Eb E F Gb G Ab A Bb B C')
    spell(Chromatic('b#'), 'B# C# C## D# D## E# F# F## G# G## A# A##')
  },
  'bad notes': function () {
    equal(Chromatic('H').length, 0)
    equal(Chromatic('C###').length, 0)
    throws(function () { Chromatic('') }, /root, please/)
    throws(function () { Chromatic() }, /root, please/)
  },
  'note names': function () {
    equal(Chromatic.NAMES.join(' '), 'A A# A## Ab Abb B B# Bb Bbb C C# C## Cb D D# D## Db Dbb E E# Eb Ebb F F# F## Fb G G# G## Gb Gbb')
  },
  'scales per note': function () {
    equal(Chromatic.NAMES.map(function (note) {
      return Chromatic(note).length
    }).join(' '), '2 2 1 2 1 2 1 2 1 2 2 1 1 2 2 1 2 1 2 1 2 1 2 2 1 1 2 2 1 2 1')
  }
}).export(module)
