const _ = require('lodash');

module.exports = Settings;

Settings.$inject = ['$http'];
function Settings($http) {
  let resource = $http
    .get('/settings.json')
    .then(settings => settings.data);

  return {
    query,
    get,
  };

  function query() {
    return resource;
  }

  function get(id) {
    return resource
      .then(settings => _.filter(settings, { filename: id })[0]);
  }
}
