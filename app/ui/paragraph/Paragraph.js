import { Directive } from '../../shim/Directive';

export class Paragraph extends Directive {
  /*@ngInject*/
  constructor(MoveService) {
    super();

    this.move = MoveService.move;
    this.restrict = 'E';
    this.transclude = true;
    this.replace = true;
    this.template = `
      <div class="cs-paragraph">
        <ng-transclude></ng-transclude>
      </div>
    `;
  }

  link(scope, elem, attr) {
    this.move(elem, { top: '39rem' });
  }
}
