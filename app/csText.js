const $ = require('jquery');

module.exports = csText;

function csText() {
  return {
    restrict: 'A',
    scope: true,
    link: csTextLink,
  }

  function csTextLink(scope, elem, attr) {
    let hasMoved = false;
    $(window).scroll(moveUp);

    function moveUp() {
      if (!hasMoved) {
        $(elem).animate({ top: '42rem' });
      }
    }
  }
}
