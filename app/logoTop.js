const $ = require('jquery');

module.exports = logoTop;

function logoTop() {
  return {
    restrict: 'E',
    replace: true,
    link: logoTopLink,
    template: `
      <div class="text-center"><div class="cs-logo-top"></div></div>
    `,
  };

  function logoTopLink(scope, elem, attr) {
    $(elem).children().animate({ top: '-5rem' });
  }
}
