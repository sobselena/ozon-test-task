import { InputField } from '../../../../components/input-field';
import { Toggle } from '../../../../components/toggle';
import type { ParametersType } from '../types';

export const parameters: Omit<ParametersType, 'onAction' | 'stateValue'>[] = [
  {
    label: 'Value',
    value: 'value',
    type: 'input',
  },
  {
    label: 'Animate',
    value: 'animate',
    type: 'toggle',
  },
  {
    label: 'Hide',
    value: 'hide',
    type: 'toggle',
  },
];

export const componentMap = {
  input: InputField,
  toggle: Toggle,
};
