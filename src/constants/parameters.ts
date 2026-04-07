import { InputField } from '../components/input-field';
import { Toggle } from '../components/toggle';
import type { ParametersType } from '../types';

export const parameters: ParametersType[] = [
  {
    label: 'Value',
    type: 'input',
  },
  {
    label: 'Animate',
    type: 'toggle',
  },
  {
    label: 'Hide',
    type: 'toggle',
  },
];

export const componentMap = {
  input: InputField,
  toggle: Toggle,
};
