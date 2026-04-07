import type { ParametersType } from '../../types';
import { Component } from '../../../../../utils';
import { InputField } from '../../../../../components/input-field';
import { Toggle } from '../../../../../components/toggle';
import './parameter.scss';

export class Parameter extends Component {
  private parametersProps: ParametersType;

  constructor(props: ParametersType) {
    super({ tag: 'div', classes: ['params__item'] });
    this.parametersProps = props;
    this.configureView();
  }

  configureView() {
    const interactionComponent = this.createInteractionComponent();
    const labelComponent = new Component({
      tag: 'span',
      text: this.parametersProps.label,
      classes: ['params__label'],
    });
    if (interactionComponent) {
      this.appendChildren([interactionComponent, labelComponent]);
    }
  }

  createInteractionComponent() {
    const { type } = this.parametersProps;
    let component;
    if (type === 'input') {
      component = this.createInputField();
    } else if (type === 'toggle') {
      component = this.createToggleBtn();
    }

    return component;
  }

  createInputField() {
    const { stateValue } = this.parametersProps;

    const component = new InputField({
      classes: ['params__input'],
      type: 'number',
      value: stateValue.toString(),
      min: '0',
      max: '100',
    });

    component.addListener('input', (event: Event) => {
      const value = Number((event.target as HTMLInputElement).value);
      if (!isNaN(value)) {
        this.parametersProps.stateValue = value;
        this.parametersProps.onAction(value);
      }
    });
    return component;
  }

  createToggleBtn() {
    const { stateValue } = this.parametersProps;
    const component = new Toggle({ classes: ['params__toggle'], isActive: stateValue as boolean });

    component.addListener('click', () => {
      const newValue = !(this.parametersProps.stateValue as boolean);
      this.parametersProps.onAction(newValue);
      this.parametersProps.stateValue = newValue;
    });
    return component;
  }
}
