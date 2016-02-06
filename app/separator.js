module.exports = separator;

function separator() {
  return {
    restrict: 'E',
    scope: true,
    replace: true,
    template: '<div class="cs-separator"></div>',
  };
}
