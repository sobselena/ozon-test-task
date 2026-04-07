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
  setAnimated(isAnimated: boolean) {
    this.getNode().classList.toggle('animated', isAnimated);
  }

  setHidden(isHidden: boolean) {
    this.getNode().classList.toggle('hidden', isHidden);
  }

  updateProgressCircle(progress: number) {
    const start = parseFloat(this.getNode().style.getPropertyValue('--progress')) || 0;
    const end = progress;
    const duration = 500;

    const startTime = performance.now();

    const animate = (time: number) => {
      const progressTime = Math.min((time - startTime) / duration, 1);
      const current = start + (end - start) * progressTime;

      this.getNode().style.setProperty('--progress', `${current}%`);

      if (progressTime < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}
