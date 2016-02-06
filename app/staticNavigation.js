module.exports = staticNavigation;

function staticNavigation() {
  return {
    restrict: 'E',
    template: `
      <ul class="cs-nav-static">
        <li><a ui-sref="home">Das Projekt</a></li>
        <li><a ui-sref="themen">Themen</a></li>
        <li>Personen</li>
      </ul>
    `,
  };
}
