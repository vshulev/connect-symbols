const $ = require('jquery');
require('jquery-ui/droppable');

module.exports = csDroppable;

csDroppable.$inject = ['ConnectionChecker', '$state'];
function csDroppable(ConnectionChecker, $state) {
  return {
    restrict: 'A',
    scope: true,
    link: csDroppableCtrl,
  };

  function csDroppableCtrl(scope, elem, attr) {
    $(elem).droppable({ drop: onDrop });

    function onDrop(event, ui) {
      let a = $(event.target).attr('id');
      let b = $(ui.draggable).attr('id');

      ConnectionChecker
        .check(a, b)
        .then(goTo);
    }

    function goTo(match) {
      if (match) {
        $state.go('interview', { id: match.filename });
      }
    }
  }
};
