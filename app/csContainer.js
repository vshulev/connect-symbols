const $ = require('jquery');

module.exports = csContainer;

function csContainer() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    link: csContainerLink,
    template: `
      <div class="container">
        <div class="row" ng-transclude>
        </div>
      </div>
    `,
  };

  function csContainerLink(scope, elem, attr) {
    $(elem).height($(window).height() + 10);
    $(elem).css({ overflow: 'hidden' });
  }
}
