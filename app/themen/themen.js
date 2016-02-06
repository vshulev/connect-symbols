module.exports = themen;

function themen() {
  return {
    restrict: 'E',
    link: themenLink,
    template: `
      <cs-container>
        <div class="col-sm-4">
          <separator></separator>
        </div>

        <div class="col-sm-4">
          <separator></separator>
          <logo-top></logo-top>
        </div>

        <div class="col-sm-4">
          <separator></separator>
          <static-navigation></static-navigation>
        </div>
      </cs-container>
    `,
  };

  function themenLink(scope, elem, attr) {

  }
}
