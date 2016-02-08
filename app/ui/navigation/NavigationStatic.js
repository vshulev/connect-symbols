import { Directive } from '../../shim/Directive';

export class NavigationStatic extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.template = `
      <ul class="cs-nav-static">
        <li ui-sref-active="active">
          <a ui-sref="projekt">Das Projekt</a>
        </li>
        <li ui-sref-active="active">
          <a ui-sref="themen">Themen</a>
        </li>
        <li ui-sref-active="active">
          <a ui-sref="personen">Personen</a>
        </li>
      </ul>
    `;
  }
}
