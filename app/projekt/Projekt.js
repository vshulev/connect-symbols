import { Directive } from '../shim/Directive';

export class Projekt extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.templateUrl = 'projekt/projekt.html';
  }
}
