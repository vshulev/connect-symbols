const $ = require('jquery');

module.exports = dynamicSeparator;

function dynamicSeparator() {
  return {
    restrict: 'E',
    replace: true,
    link: dynamicSeparatorLink,
    template: '<div class="cs-separator"></div>',
  };

  function dynamicSeparatorLink(scope, elem, attr) {
    $(elem).animate({ top: '18rem' });
  }
}
