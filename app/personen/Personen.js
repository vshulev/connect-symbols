import { Directive } from '../shim/Directive';

export class Personen extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.templateUrl = 'personen/personen.html';
  }
}
