/**

Tacktick Custom Sentences (1- Polar Speed Ratio):
message = "PTAK,FFD1,xyz";

**/

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    sentence: 'PTAK_FFD4',
    optionKey: 'PTAK_FFD4',
    title: 'PTAK - Racing - Time to Layline',
    keys: ['navigation.racing.layline.time'],
    f: function (ttll) {
      const timetolyl = ttll === null ? undefined : new Date(ttll * 1000).toISOString().substring(11, 16)
      return nmea.toSentence([
        '$PTAK',
        'FFD4',
        timetolyl
      ])
    }
  }
}
