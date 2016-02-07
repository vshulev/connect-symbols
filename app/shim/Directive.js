export class Directive {
  static create(Component) {
    let args = (Component.$inject || []).slice();
    args.push((...args) => {
      return new Component(...args);
    });
    return args;
  }

  compile() {
    if (this.link) {
      return this.link.bind(this);
    }
  }
}
