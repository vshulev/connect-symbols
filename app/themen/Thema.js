import { Directive } from '../shim/Directive';

export class Thema extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.templateUrl = 'themen/thema.html';
  }
}
