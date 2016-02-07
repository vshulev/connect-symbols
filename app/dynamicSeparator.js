const $ = require('jquery');

module.exports = dynamicSeparator;

function dynamicSeparator() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div move-up top="18rem" class="cs-separator"></div>',
  };
}
