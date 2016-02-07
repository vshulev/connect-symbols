module.exports = themen;

function themen() {
  return {
    restrict: 'E',
    link: themenLink,
    templateUrl: 'themen/themen.html',
  };

  function themenLink(scope, elem, attr) {

  }
}
