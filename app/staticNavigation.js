module.exports = staticNavigation;

function staticNavigation() {
  return {
    restrict: 'E',
    template: `
      <ul class="cs-nav-static">
        <li>Das Projekt</li>
        <li><a href="#" ui-sref="themen">Themen</a></li>
        <li>Personen</li>
      </ul>
    `,
  };
}
