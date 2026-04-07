import { Component } from '../../utils';
import './toggle.scss';
type ToggleProps = {
  classes: string[];
  isActive: boolean;
};

export class Toggle extends Component {
  private isActive;

  constructor({ classes, isActive = false }: ToggleProps) {
    super({ tag: 'div', classes });
    this.isActive = isActive;
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
