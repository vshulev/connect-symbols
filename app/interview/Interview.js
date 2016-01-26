const _ = require('lodash');

module.exports = Interview;

Interview.$inject = ['$http'];
function Interview($http) {
  let resource = $http
    .get('/interviews.json')
    .then(interviews => interviews.data);

  return {
    query,
    get,
  };

  function query() {
    return resource;
  }

  function get(id) {
    return resource
      .then(interviews => _.filter(interviews, { filename: id })[0]);
  }
}
