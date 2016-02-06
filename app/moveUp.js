const $ = require('jquery');

module.exports = moveUp;

function moveUp() {
  return {
    restrict: 'A',
    scope: {
      top: '@',
    },
    link: moveUpLink,
  };

  function moveUpLink(scope, elem, attr) {
    let hasMoved = false;
    $(window).scroll(move);

    function move() {
      scope.$apply(() => {
        if (!hasMoved) {
          $(elem).animate({ top: scope.top });
        }
      });
    }
  }
}
