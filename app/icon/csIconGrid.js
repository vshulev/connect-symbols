const _ = require('lodash');

module.exports = csIconGrid;

csIconGrid.$inject = ['Settings'];
function csIconGrid(Settings) {
  return {
    restrict: 'E',
    scope: true,
    link: csIconGridCtrl,
    template: `
      <div class="row cs-icon-grid">
        <div class="col-sm-2" ng-repeat="icon in icons">
          <img
            cs-draggable
            cs-droppable
            class="img-responsive"
            alt="{{ icon.id }}"
            id="{{ icon.id }}"
            src="{{ icon.src }}">
        </div>
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
