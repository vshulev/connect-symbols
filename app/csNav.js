module.exports = csNav;

function csNav() {
  return {
    restrict: 'E',
    scope: true,
    template: `
      <ul>
        <li><a ui-sref="home">combine</a></li>
        <li>interview</li>
        <li><a ui-sref="people">menschen</a></li>
        <li>about</li>
      </ul>
    `,
  };
}
