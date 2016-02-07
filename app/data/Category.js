export class Category {
  constructor() {
    this._categories = require('../../content/topics.yml');
  }

  all() {
    return this._categories;
  }
}
