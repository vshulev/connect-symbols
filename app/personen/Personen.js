import { Directive } from '../shim/Directive';

export class Personen extends Directive {
  /*@ngInject*/
  constructor(Person) {
    super();
    this.people = Person.all();

    this.restrict = 'E';
    this.templateUrl = 'personen/personen.html';
  }

  link(scope, elem, attr) {
    scope.people = this.people;
    scope.selected = {};
    scope.selected.person = scope.people[0];

    scope.select = function(person) {
      scope.selected.person = person;
    };
  }
}
