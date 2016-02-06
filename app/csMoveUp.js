const $ = require('jquery');

module.exports = csMoveUp;

function csMoveUp() {
  return {
    restrict: 'A',
    scope: {
      top: '@',
    },
    link: csMoveUpLink,
  };

  function csMoveUpLink(scope, elem, attr) {
    let hasMoved = false;
    $(window).scroll(moveUp);

    function moveUp() {
      if (!hasMoved) {
        $(elem).animate({ top: scope.top });
      }
    }
  }
}
