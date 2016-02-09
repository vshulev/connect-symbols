const _ = require('lodash');

export class Person {
  /*@ngInject*/
  constructor(Interview) {
    this._people = require('../../content/people.yml');
    this._people.forEach((person) => {
      person.interview = Interview.get(person.interview);
      person.description = person.description.replace(/\\n/g, '<br>');
    });
  }

  all() {
    return this._people;
  }

  get(id) {
    return _.filter(this._people, { interview: id })[0];
  }

  getByTopic(topic) {
    let people = _.filter(this._people, (person) => {
      return _.filter(person.topics, { name: topic }).length > 0;
    });

    // make sure the two sides alternate
    let leftSide = this._getLeft(people, topic);
    let rightSide = this._getRight(people, topic);
    let result = this._merge(leftSide, rightSide);
    return result;
  }

  _getLeft(people, topic) {
    return this._getSide(people, topic, 'left');
  }

  _getRight(people, topic) {
    return this._getSide(people, topic, 'right');
  }

  _getSide(people, topic, side) {
    return _.filter(people, (person) => {
      let s = _.filter(person.topics, { name: topic })[0].side;
      return s === side;
    });
  }

  _merge(a, b) {
    let result = [];
    let i;
    for (i = 0; i < a.length; i++) {
      result.push(a[i]);

      if (i < b.length) {
        result.push(b[i]);
      }
    };

    for (let j = i; j < b.length; j++) {
      result.push(b[j]); // haha, BJ
    }

    return result;
  }
}
