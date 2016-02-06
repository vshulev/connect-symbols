const $ = require('jquery');

module.exports = csContainer;

function csContainer() {
  return {
    restrict: 'A',
    scope: true,
    link: csContainerLink,
  };

  function csContainerLink(scope, elem, attr) {
    $(elem).height($(window).height() + 10);
    $(elem).css({ overflow: 'hidden' });
  }
}
