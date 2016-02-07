module.exports = navigation;

function navigation() {
  return {
    restrict: 'E',
    template: `
      <ul move-up top="5rem" class="cs-nav">
        <li><a ui-sref="home">Das Projekt</a></li>
        <li><a ui-sref="themen">Themen</a></li>
        <li><a ui-sref="personen">Personen</a></li>
      </ul>
    `,
  };
}
