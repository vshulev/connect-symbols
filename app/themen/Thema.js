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
    scope.people = this.Person.getByTopic(this.$stateParams.id);
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
    return _.filter(people, { side: 'left' })[0];
  }

  _firstRight(people) {
    return _.filter(people, { side: 'left' })[0];
  }
}
