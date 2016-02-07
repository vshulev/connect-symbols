import { Directive } from '../../shim/Directive';

export class NavigationStatic extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.template = `
      <ul class="cs-nav-static">
        <li><a ui-sref="home">Das Projekt</a></li>
        <li><a ui-sref="themen">Themen</a></li>
        <li><a ui-sref="personen">Personen</a></li>
      </ul>
    `;
  }
}
