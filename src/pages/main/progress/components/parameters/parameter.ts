import type { ParametersType } from '../../../../../types';
import { Component } from '../../../../../utils';
import { InputField } from '../../../../../components/input-field';
import { Toggle } from '../../../../../components/toggle';
import './parameter.scss';

export class Parameter extends Component {
  constructor(props: ParametersType) {
    super({ tag: 'div', classes: ['params__item'] });

    this.configureView(props);
  }

  configureView(props: ParametersType) {
    const interactionComponent = this.createInteractionComponent({ type: props.type });
    const labelComponent = new Component({ tag: 'span', text: props.label });
    this.appendChildren([interactionComponent, labelComponent]);
  }

  createInteractionComponent({ type }: Pick<ParametersType, 'type'>) {
    switch (type) {
      case 'input':
        return new InputField({ classes: ['params__input'], type: 'number', value: '60' });

      case 'toggle':
        return new Toggle({ classes: ['params__toggle'] });
    }
  }
}
