import type { ParametersType } from '../../types';
import { Component } from '../../../../../utils';
import { InputField } from '../../../../../components/input-field';
import { Toggle } from '../../../../../components/toggle';
import './parameter.scss';
import type { ProgressCircle } from '../progress-circle';

export class Parameter extends Component {
  private parametersProps: ParametersType & {
    circle: ProgressCircle;
  };
  constructor(
    props: ParametersType & {
      circle: ProgressCircle;
    }
  ) {
    super({ tag: 'div', classes: ['params__item'] });
    this.parametersProps = props;
    this.configureView();
  }

  configureView() {
    const interactionComponent = this.createInteractionComponent();
    const labelComponent = new Component({ tag: 'span', text: this.parametersProps.label });
    if (interactionComponent) {
      this.appendChildren([interactionComponent, labelComponent]);
    }
  }

  createInteractionComponent() {
    const { stateValue, type, onAction } = this.parametersProps;
    let component;
    if (type === 'input') {
      component = new InputField({
        classes: ['params__input'],
        type: 'number',
        value: stateValue.toString(),
      });
      component.addListener('input', (event: Event) => {
        const value = Number((event.target as HTMLInputElement).value);
        if (!isNaN(value)) {
          this.parametersProps.stateValue = value;
          this.parametersProps.circle.updateProgressCircle(this.parametersProps.stateValue);
          this.parametersProps.onAction(this.parametersProps.stateValue);
        }
      });
    } else if (type === 'toggle') {
      component = new Toggle({ classes: ['params__toggle'], isActive: stateValue as boolean });

      component.addListener('click', () => {
        this.parametersProps.stateValue = !this.parametersProps.stateValue;
        onAction(this.parametersProps.stateValue);
      });
    }

    return component;
  }
}
