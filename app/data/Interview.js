export class Interview {
  constructor() {
    this._interviews = require('../../content/interviews/*.md', { mode: 'hash' });
  }

  all() {
    return this._interviews;
  }

  get(id) {
    return this._interviews[id];
  }
}
