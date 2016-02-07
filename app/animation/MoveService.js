const $ = require('jquery');

export class MoveService {
  move(elem, opts, delay=1000) {
    $(elem).animate(opts, delay);
  }
}
