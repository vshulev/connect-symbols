var _ = require('lodash');

module.exports = Interview;

Interview.$inject = ['$http'];
function Interview($http) {
  var resource = $http.get('/Interviews.json');

  return {
    query: query,
    get: get
  };

  function query() {
    return resource;
  }

  function get(id) {
    return resource.then(function(interviews) {
      return _.map(interviews, { filename: id });
    });
  }
}
