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
    let people = _.filter(this._people, { topic: topic });

    // make sure the two sides alternate
    let leftSide = _.filter(people, { side: 'left' });
    let rightSide = _.filter(people, { side: 'right' });
    return this._merge(leftSide, rightSide);
  }

  _merge(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      result.push(a[i]);

      if (i < b.length) {
        result.push(b[i]);
      }
    };

    return result;
  }
}
