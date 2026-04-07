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
    const labelComponent = new Component({ tag: 'span', text: this.parametersProps.label });
    this.appendChildren([interactionComponent, labelComponent]);
  }

  createInteractionComponent() {
    const { stateValue, type } = this.parametersProps;
    switch (type) {
      case 'input':
        return new InputField({
          classes: ['params__input'],
          type: 'number',
          value: stateValue.toString(),
        });
      case 'toggle':
        return new Toggle({ classes: ['params__toggle'], isActive: stateValue as boolean });
    }
  }
}
