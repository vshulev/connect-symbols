const $ = require('jquery');

module.exports = logo;

function logo() {
  return {
    restrict: 'E',
    replace: true,
    link: logoLink,
    template: `
      <div class="text-center"><div move-up top="5rem" class="cs-logo"></div>
    `,
  };

  function logoLink(scope, elem, attr) {
    scope.$on('cs:navigate', (event, target) => {
      // TODO do smth...
    });
  }
}
