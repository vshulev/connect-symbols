var _ = require('lodash');

module.exports = Interview;

Interview.$inject = ['$http'];
function Interview($http) {
  var resource = $http.get('/interviews.json').then(function(interviews) {
    return interviews.data;
  });

  return {
    query: query,
    get: get
  };

  function query() {
    return resource;
  }

  function get(id) {
    return resource.then(function(interviews) {
      return _.filter(interviews, { filename: id })[0];
    });
  }
}
