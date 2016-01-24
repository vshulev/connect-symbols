var $      = require('jquery');
var Bounce = require('bounce.js');

module.exports = csShaky;

function csShaky() {
  return {
    restrict: 'A',
    scope: true,
    link: csShakyCtrl
  };

  function csShakyCtrl(scope, elem, attr) {
    // make it shake!
    new Bounce()
      .rotate({
        from: 0,
        to: 2,
        easing: 'bounce',
        duration: 80,
        delay: 0,
        bounces: 4,
        stiffness: 3
      })
      .rotate({
        from: 0,
        to: -4,
        easing: 'bounce',
        duration: 80,
        delay: 80,
        bounces: 4,
        stiffness: 3
      })
      .applyTo($(elem), { loop: true });
  }
}
