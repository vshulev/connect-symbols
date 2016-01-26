var bitballoon = require('bitballoon');

module.exports = function(done) {
  var opts = {
    access_token: process.env.ACCESS_TOKEN,
    site_id: process.env.SITE_ID,
    dir: 'build',
  };

  bitballoon.deploy(opts, (err, deploy) => done(err));
};
