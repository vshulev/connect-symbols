import { Directive } from '../../shim/Directive';

export class SideNavigation extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.replace = true;
    this.template = `
      <ul class="cs-nav-side">
        <li><a ui-sref="thema({ id: 123 })">Was ist ein Designer?</a></li>
        <li>Wandel & Zukunft des Designberufs</li>
        <li>Interessenvertretung</li>
        <li>Diskussion</li>
      </ul>
    `;
  }
}
