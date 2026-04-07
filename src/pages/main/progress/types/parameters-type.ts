export type ProgressState = {
  value: number;
  animate: boolean;
  hide: boolean;
};

export type ParametersType<K extends keyof ProgressState = keyof ProgressState> = {
  label: string;
  value: K;
  type: 'toggle' | 'input';
  onAction: (value: ProgressState[K]) => void;
  stateValue: ProgressState[K];
};
