import { Directive } from '../../shim/Directive';

export class SideNavigation extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.replace = true;
    this.template = `
      <ul class="cs-nav-side">
        <li><h4><a ui-sref="thema({ id: 123 })">Was ist ein Designer?</a></h4></li>
        <li><h4>Wandel & Zukunft des Designberufs</h4></li>
        <li><h4>Interessenvertretung</h4></li>
        <li><h4>Diskussion</h4></li>
      </ul>
    `;
  }
}
