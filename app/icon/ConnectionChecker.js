const _ = require('lodash');

module.exports = ConnectionChecker;

/**
 * Checks whether a combination of two symbols corresponds to an interview.
 */
ConnectionChecker.$inject = ['Interview'];
function ConnectionChecker(Interview) {
  return {
    check,
  };

  function check(a, b) {
    return Interview
      .query()
      .then(interviews => getMatching(interviews, [a, b]));
  }

  function getMatching(interviews, combo) {
    let match = _.filter(interviews, interview => matchesCombo(interview, combo));
    return match && match.length > 0
      ? match[0]
      : null;
  }

  function matchesCombo(interview, combo) {
    return _.difference(interview.meta.separate, combo).length === 0;
  }
}
