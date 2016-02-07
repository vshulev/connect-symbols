module.exports = homeText;

function homeText() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: `
      <div move-up-scroll top="42rem" class="cs-home-text">
        <ng-transclude></ng-transclude>
      </div>
    `,
  };
}
