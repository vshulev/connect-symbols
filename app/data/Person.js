const _ = require('lodash');

export class Person {
  constructor() {
    this._people = require('../../content/people.yml');
  }

  all() {
    return this._people;
  }

  get(id) {
    return _.filter(this._people, { interview: id })[0];
  }
}
