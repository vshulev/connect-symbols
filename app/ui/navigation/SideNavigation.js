import { Directive } from '../../shim/Directive';

export class SideNavigation extends Directive {
  constructor(Category) {
    super();
    this.categories = Category.all();

    this.restrict = 'E';
    this.replace = true;
    this.template = `
      <ul class="cs-nav-side">
        <li ng-repeat="category in categories">
          <h4>{{ category.category }}</h4>
          <ul style="margin-bottom: 10px; list-style-type: none">
            <li ng-repeat="topic in category.topics">
              <a ui-sref="thema({ id: topic })">{{ topic }}</a>
            </li>
          </ul>
        </li>
      </ul>
    `;
  }

  link(scope, elem, attr) {
    scope.categories = this.categories;
  }
}
