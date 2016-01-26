var _ = require('lodash');

module.exports = csIconGrid;

csIconGrid.$inject = ['Settings'];
function csIconGrid(Settings) {
  return {
    restrict: 'E',
    scope: {
      interviews: '=',
    },
    link: csIconGridCtrl,
    template: `
      <div class="row cs-icon-grid">
        <div class="col-sm-2" ng-repeat="icon in icons">
          <img cs-draggable class="img-responsive" src="{{ icon }}">
        </div>
      </div>
    `,
  };

  function csIconGridCtrl(scope, elem, attr) {
    Settings
      .query()
      .then(settings => settings.icons.order)
      .then(icons => icons.map(icon => `images/icons/${icon}.png`))
      .then(icons => { scope.icons = icons; });
  }
}
