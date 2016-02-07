const $ = require('jquery');

module.exports = logoTop;

function logoTop() {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <div class="text-center">
        <div move-up top="-5rem" class="cs-logo-top"></div>
      </div>
    `,
  };
}
