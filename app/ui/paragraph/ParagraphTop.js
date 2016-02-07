import { Paragraph } from './Paragraph';

export class ParagraphTop extends Paragraph {
  /*@ngInject*/
  constructor(MoveService) {
    super(MoveService);
  }

  link(scope, elem, attr) {
    this.move(elem, { top: '22rem' });
  }
}
