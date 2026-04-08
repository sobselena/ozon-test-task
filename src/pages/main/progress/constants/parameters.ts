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

export const MIN_VALUE = 0;
export const MAX_VALUE = 100;
