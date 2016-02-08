const _ = require('lodash');

import { Directive } from '../shim/Directive';

export class Thema extends Directive {
  /*@ngInject*/
  constructor($stateParams, Person) {
    super();
    this.$stateParams = $stateParams;
    this.Person = Person;

    this.restrict = 'E';
    this.templateUrl = 'themen/thema.html';
  }

  link(scope, elem, attr) {
    this.topic = this.$stateParams.id;
    scope.people = this.Person.getByTopic(this.topic);
    scope.selected = {};
    scope.selected.left = this._firstLeft(scope.people);
    scope.selected.right = this._firstRight(scope.people);

    scope.select = function(person) {
      person.side === 'left'
        ? scope.selected.left = person
        : scope.selected.right = person;
    };
  }

  _firstLeft(people) {
    // TODO duplicate code - extract into method
    return _.filter(people, (person) => {
      return _.filter(person.topics, { name: this.topic })[0].side === 'left';
    })[0];
  }

  _firstRight(people) {
    return _.filter(people, (person) => {
      return _.filter(person.topics, { name: this.topic })[0].side === 'right';
    })[0];
  }
}
