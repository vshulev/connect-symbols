export class Directive {
  compile() {
    if (this.link) {
      return this.link.bind(this);
    }
  }
}
