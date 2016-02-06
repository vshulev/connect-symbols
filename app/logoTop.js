const $ = require('jquery');

module.exports = logoTop;

function logoTop() {
  return {
    restrict: 'E',
    replace: true,
    link: logoTopLink,
    template: '<div class="cs-logo-top"></div>',
  };

  function logoTopLink(scope, elem, attr) {
    $(elem).animate({ top: '-5rem' });
  }
}
