const $ = require('jquery');
const uid = require('uid');

import { Paragraph } from './Paragraph';

export class ParagraphTop extends Paragraph {
  /*@ngInject*/
  constructor(MoveService) {
    super(MoveService);
    this.scope = {
      scrollTo: '@?',
    };
  }

  link(scope, elem, attr) {
    this.move(elem, { top: '22rem' }).then(() => {
      $(elem).height($(window).height() - $(elem).offset().top - 60);

      // scroll to anchor
      if (scope.scrollTo) {
        let id = uid();

        let html = $(elem).html();
        let position = html.indexOf(scope.scrollTo);
        let preScroll = html.slice(0, position);
        let postScroll = html.slice(position + scope.scrollTo.length);
        html = `${preScroll}<span id="${id}">${scope.scrollTo}</span>${postScroll}`;
        $(elem).html(html);
        $(elem).scrollTop($(`#${id}`).position().top);

        scope.$apply();
      }
    });
  }
}
