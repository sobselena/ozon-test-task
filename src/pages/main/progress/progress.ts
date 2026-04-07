import { Parameter } from './components/parameters';
import { Component } from '../../../utils';
import './progress.scss';
import { parameters } from './constants/parameters';
import type { ProgressState } from './types';
import { ProgressCircle } from './components/progress-circle';

export class Progress extends Component {
  state: ProgressState = {
    value: 60,
    animate: false,
    hide: false,
  };
  private circleComponent: ProgressCircle;
  constructor() {
    super({ tag: 'main', classes: ['progress'] });
    this.circleComponent = new ProgressCircle({ progress: this.state.value });
    this.configureView();
  }

  configureView() {
    const progressTitle = new Component({
      tag: 'h1',
      classes: ['progress__title'],
      text: 'Progress',
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
          circle: this.circleComponent,
        })
    );
    parametersContainer.appendChildren(parametersComponents);
    this.appendChildren([progressTitle, this.circleComponent, parametersContainer]);
  }
  handleAction<K extends keyof ProgressState>(key: K, value: ProgressState[K]): void {
    this.state[key] = value;
  }
}
