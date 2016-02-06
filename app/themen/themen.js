module.exports = themen;

function themen() {
  return {
    restrict: 'E',
    link: themenLink,
    template: `
      <cs-container>
        <div class="col-sm-4">
          <dynamic-separator></dynamic-separator>
        </div>

        <div class="col-sm-4">
          <dynamic-separator></dynamic-separator>
          <logo-top></logo-top>
        </div>

        <div class="col-sm-4">
          <dynamic-separator></dynamic-separator>
          <static-navigation></static-navigation>
        </div>
      </cs-container>
    `,
  };

  function themenLink(scope, elem, attr) {

  }
}
