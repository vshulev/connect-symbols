const _ = require('lodash');

module.exports = Settings;

Settings.$inject = ['$http'];
function Settings($http) {
  let resource = $http
    .get('/settings.json')
    .then(settings => interviews.data);

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
