const $ = require('jquery');

module.exports = csLogo;

function csLogo() {
  return {
    restrict: 'A',
    scope: true,
    link: csMoveUpLink,
  };

  function csMoveUpLink(scope, elem, attr) {
    let hasMoved = false;
    $(window).scroll(moveUp);

    function moveUp() {
      if (!hasMoved) {
        $(elem).animate({ top: '6rem' });
      }
    }
  }
}
