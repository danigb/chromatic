# Chromatic

Chromatic musical scales, in ascending or descending order, any length.

__This is a low level library, and almost an experiment. Probably you will prefer [musical-scales](http://github.com/danigb/musical-scales)__

## Usage

Require the module: `npm i --save chromatic` and use it:

```js
var chromatic = require('chromatic')
chromatic('C', 2) // => [ [ 'C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2' ],
                  //      [ 'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2' ] ]
```

## API: chromatic(root, octave = null, length = 12, descending = false)

Return an array of chromatic scales (array of notes) starting with the given root.

If octave is given, the notes has octave numbers. You can choose how many notes (with length) or if its descending (false by default)

```js
chromatic('Db', null, 3, true) // => [ [ 'Db4', 'C3', 'B3' ], [ 'Db4', 'Dbb4', 'Cb3' ] ]
´´´

## License

MIT
