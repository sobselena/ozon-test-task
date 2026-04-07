import { Component } from '../../utils';

type InputFieldProperties = {
  classes: string[];
  placeholder?: string;
  value?: string;
  type?: string;
  onKeyUp?: (event: Event) => void;
};

export class InputField extends Component {
  private onKeyUp?: (event: Event) => void;
  constructor({ classes, placeholder, value, type, onKeyUp }: InputFieldProperties) {
    super({ tag: 'input', classes });
    if (placeholder) {
      this.setPlaceholder(placeholder);
    }
    if (type) {
      this.setType(type);
    }
    if (value) {
      this.setAttribute('value', value);
    }
    if (onKeyUp) {
      this.addKeyUpEvent(onKeyUp);
    }
  }

  getValue(): string {
    return (this.getNode() as HTMLInputElement).value;
  }

  setDeffaultValue(): void {
    (this.getNode() as HTMLInputElement).value = '';
  }

  setPlaceholder(placeholder: string) {
    this.setAttribute('placeholder', placeholder);
  }

  addKeyUpEvent(callback: EventListener) {
    this.onKeyUp = (event: Event) => callback(event);
    this.addListener('keyup', this.onKeyUp);
  }
  deleteKeyUpEvent() {
    if (this.onKeyUp) {
      this.deleteListener('keyup', this.onKeyUp);
    }
  }
  setType(type: string) {
    this.setAttribute('type', type);
  }
}
