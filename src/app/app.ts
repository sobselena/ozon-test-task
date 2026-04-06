import { Component } from '../utils/Component';

export class App {
  private wrapper: Component;
  constructor() {
    this.wrapper = new Component(
      { tag: 'div', classes: ['wrapper'] },
      new Component({ tag: 'main', classes: ['main'], text: 'main' })
    );
  }

  render() {
    document.body.append(this.wrapper.getNode());
  }
}
