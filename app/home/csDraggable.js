var $ = require('jquery');
require('jquery-ui/draggable');

module.exports = csDraggable;

function csDraggable() {
  return {
    restrict: 'A',
    scope: true,
    link: csDraggableCtrl
  };

  function csDraggableCtrl(scope, elem, attr) {
    $(elem).draggable({ revert: true });
  }
}
