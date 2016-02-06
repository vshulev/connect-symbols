module.exports = navigation;

navigation.$inject = ['$rootScope'];
function navigation($rootScope) {
  return {
    restrict: 'E',
    link: navigationLink,
    template: `
      <ul move-up top="5rem" class="cs-nav">
        <li><a ui-sref="home">Das Projekt</a></li>
        <li><a ui-sref="themen">Themen</a></li>
        <li>Personen</li>
      </ul>
    `,
  };

  function navigationLink(scope, elem, attr) {
    scope.gotoThemen = function() {
      $rootScope.$broadcast('cs:navigate', 'themen');
    };
  }
}
