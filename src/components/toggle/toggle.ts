import { Component } from '../../utils';
import './toggle.scss';
type ToggleProps = {
  classes: string[];
};

export class Toggle extends Component {
  private isActive = false;

  constructor({ classes }: ToggleProps) {
    super({ tag: 'div', classes });

    this.addListener('click', this.toggle.bind(this));
    this.updateView();
  }

  toggle() {
    this.isActive = !this.isActive;
    this.updateView();
  }

  updateView() {
    this.getNode().classList.toggle('active', this.isActive);
  }
}
