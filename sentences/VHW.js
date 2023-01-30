/**
$IIVHW,x .x,T,x.x,M,x.x,N,x.x,K*hh
       I I I I I I I__I_Surface speed in kph
       I I I I I__I_Surface speed in knots
       I I I__I_Magnetic compass heading
       I__I_True compass heading
 */

// NMEA0183 Encoder VHW   $IIVHW,201.1,T,209.2,M,6.5,N,12.0,K*6E

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    sentence: 'VHW',
    title: 'VHW - Speed and direction',
    keys: [
      'navigation.speedThroughWater'
    ],
    f: function vhw (speedThroughWater) {

      let headingTrue = app.getSelfPath('navigation.headingTrue')
      let headingMagnetic = app.getSelfPath('navigation.headingMagnetic')

      app.debug(headingTrue)

      return nmea.toSentence([
        '$IIVHW',
        headingTrue ? nmea.radsToDeg(headingTrue.value).toFixed(1) : '',
        'T',
        headingMagnetic ? nmea.radsToDeg(headingMagnetic.value).toFixed(1) : '',
        'M',
        nmea.msToKnots(speedThroughWater).toFixed(2),
        'N',
        nmea.msToKM(speedThroughWater).toFixed(2),
        'K'
      ])
    }
  }
}
