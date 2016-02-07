import { Directive } from '../../shim/Directive';

export class SideNav extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.template = `
      <ul move-up top="18rem" class="cs-nav-side">
        <li><a ui-sref="thema({ id: 123 })">Was ist ein Designerrr?</a></li>
        <li>Wandel & Zukunft des Designberufs</li>
        <li>Interessenvertretung</li>
        <li>Diskussion</li>
      </ul>
    `;
  }
}
