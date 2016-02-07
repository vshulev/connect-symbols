import { Directive } from '../../shim/Directive';

export class SideNav extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.template = `
      <ul move-up top="18rem" class="cs-nav-side">
        <li>Was ist ein Designer?</li>
        <li>Wandel & Zukunft des Designberufs</li>
        <li>Interessenvertretung</li>
        <li>Diskussion</li>
      </ul>
    `;
  }
}
