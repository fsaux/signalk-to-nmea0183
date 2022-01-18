/**

Tacktick Custom Sentences (1- Polar Speed Ratio):
message = "PTAK,FFD1,xyz";

**/

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    sentence: 'PTAK_FFD1',
    optionKey: 'PTAK_FFD1',
    title: 'PTAK - Performance - Polar Speed Ratio',
    keys: ['performance.polarSpeedRatio'],
    f: function (performance) {
      var perf = performance *100;

      return nmea.toSentence([
        '$PTAK',
        'FFD1',
        performance.toFixed(0)
      ])
    }
  }
}
