var _ = require('lodash');

module.exports = csIconGrid;

function csIconGrid() {
  return {
    restrict: 'E',
    scope: {
      interviews: '='
    },
    template: [
      '<div class="row cs-icon-grid">',
        '<div class="col-sm-2" ng-repeat="icon in [1, 2, 3, 4]">',
          '<img cs-draggable class="img-responsive" src="images/icons/brain.png">',
        '</div>',
      '</div>'
    ].join(''),
    link: csIconGridCtrl
  };

  function csIconGridCtrl(scope, elem, attr) {
  }
}
