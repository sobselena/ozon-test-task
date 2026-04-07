import { Parameter } from './components/parameters';
import { parameters } from '../../../constants';
import { Component } from '../../../utils';
import './progress.scss';

export class Progress extends Component {
  constructor() {
    super({ tag: 'main', classes: ['progress'] });
    this.configureView();
  }

  configureView() {
    const progressTitle = new Component({
      tag: 'h1',
      classes: ['progress__title'],
      text: 'Progress',
    });
    const circleComponent = new Component({
      tag: 'div',
      classes: ['progress-circle'],
    });
    const parametersContainer = new Component({
      tag: 'div',
      classes: ['params'],
    });
    const parametersComponents = parameters.map(parameterProps => new Parameter(parameterProps));
    parametersContainer.appendChildren(parametersComponents);
    this.appendChildren([progressTitle, circleComponent, parametersContainer]);
  }
}
