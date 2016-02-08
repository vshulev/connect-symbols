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
          <h4><a href="">{{ category.category }}</a></h4>
          <ul class="cs-nav-side-inner" ui-sref-active="active">
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
