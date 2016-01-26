// TODO
// there is a bug with the marky-mark dependency
// it flattens the structure of the YAML front-matter
// which means nested values are not supported
// need to implement custom functinoality to parse markdown files with front-matter!

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
