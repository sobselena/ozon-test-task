import { Parameter } from './components/parameters';
import { Component } from '../../../utils';
import './progress.scss';
import { MAX_VALUE, MIN_VALUE, parameters } from './constants/parameters';
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
          onAction: valueData => this.handleAction(parameterProps.value, valueData),
          stateValue: this.state[parameterProps.value],
        })
    );

    parametersContainer.appendChildren(parametersComponents);
    this.appendChildren([progressTitle, this.circleComponent, parametersContainer]);
  }

  handleAction<K extends keyof ProgressState>(key: K, value: ProgressState[K]): void {
    let result = value;

    if (key === 'value') {
      const normalizedValue = Math.max(MIN_VALUE, Math.min(MAX_VALUE, value as number));
      result = normalizedValue as ProgressState[K];
      this.circleComponent.updateProgressCircle(normalizedValue);
    } else if (key === 'animate') {
      this.circleComponent.setAnimated(value as boolean);
    } else if (key === 'hide') {
      this.circleComponent.setHidden(value as boolean);
    }

    this.state[key] = result;
  }
}
