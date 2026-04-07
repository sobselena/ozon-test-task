import { Progress } from '../pages/main/progress/progress';
import { Component } from '../utils/component';

export class App {
  private wrapper: Component;
  constructor() {
    this.wrapper = new Component({ tag: 'div', classes: ['wrapper'] }, new Progress());
  }

  render() {
    document.body.append(this.wrapper.getNode());
  }
}
