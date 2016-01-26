const _ = require('lodash');

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
        <cs-icon ng-repeat="icon in icons"></cs-icon>
      </div>
    `,
  };

  function csIconGridCtrl(scope, elem, attr) {
    Settings
      .query()
      .then(settings => settings.icons.order)
      .then(icons => icons.map(icon => iconData(icon)))
      .then(icons => { scope.icons = icons; });

    function iconData(icon) {
      let data = {};
      data.src = `images/icons/${icon}.png`;
      data.id = icon;
      return data;
    }
  }
}
