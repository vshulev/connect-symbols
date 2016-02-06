module.exports = navigation;

navigation.$inject = ['$rootScope'];
function navigation($rootScope) {
  return {
    restrict: 'E',
    link: navigationLink,
    template: `
      <ul move-up top="-20rem" class="cs-nav">
        <li>Das Projekt</li>
        <li><a href="#" ng-click="gotoThemen()">Themen</a></li>
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
