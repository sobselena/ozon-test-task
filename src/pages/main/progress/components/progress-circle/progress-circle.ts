import { Component } from '../../../../../utils';
import './progress-circle.scss';
type Props = {
  progress: number;
};

export class ProgressCircle extends Component {
  constructor({ progress }: Props) {
    super({ tag: 'div', classes: ['progress-circle'] });
    this.updateProgressCircle(progress);
  }
  updateProgressCircle(progress: number) {
    this.getNode().style.setProperty('--progress', `${progress}%`);
  }
}
