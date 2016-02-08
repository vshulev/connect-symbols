const $ = require('jquery');

export class MoveService {
  move(elem, opts, delay=1000) {
    return $(elem).animate(opts, delay).promise();
  }
}
