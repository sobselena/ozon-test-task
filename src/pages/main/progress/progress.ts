import { Parameter } from './components/parameters';
import { Component } from '../../../utils';
import './progress.scss';
import { parameters } from './constants/parameters';
import type { ProgressState } from './types';

export class Progress extends Component {
  state: ProgressState = {
    value: 70,
    animate: false,
    hide: false,
  };
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
    const parametersComponents = parameters.map(
      parameterProps =>
        new Parameter({
          ...parameterProps,
          onAction: value => this.handleAction(parameterProps.value, value),
          stateValue: this.state[parameterProps.value],
        })
    );
    parametersContainer.appendChildren(parametersComponents);
    this.appendChildren([progressTitle, circleComponent, parametersContainer]);
  }
  handleAction<K extends keyof ProgressState>(key: K, value: ProgressState[K]): void {
    this.state[key] = value;
  }
}
