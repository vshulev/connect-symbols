const $ = require('jquery');

import { Paragraph } from './Paragraph';

export class ParagraphTop extends Paragraph {
  /*@ngInject*/
  constructor(MoveService) {
    super(MoveService);
  }

  link(scope, elem, attr) {
    this.move(elem, { top: '22rem' }).then(() => {
      $(elem).height($(window).height() - $(elem).offset().top - 60);
    });
  }
}
