module.exports = logo;

function logo() {
  return {
    restrict: 'E',
    replace: true,
    link: logoLink,
    template: '<div move-up top="-20rem" class="cs-logo"></div>',
  };

  function logoLink(scope, elem, attr) {
    
  }
}
