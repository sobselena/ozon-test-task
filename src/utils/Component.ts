type Props = {
  tag: keyof HTMLElementTagNameMap;
  classes?: string[];
  text?: string;
};

export class Component {
  private node: HTMLElement;

  private allChildren: Component[] = [];

  constructor({ tag, classes = [], text = '' }: Props, ...children: Component[]) {
    this.node = document.createElement(tag);

    this.setText(text);

    if (classes.length > 0) {
      this.node.classList.add(...classes);
    }
    if (children.length > 0) {
      this.appendChildren(children);
    }
  }

  appendChildren(children: Component[]) {
    children.forEach(child => {
      this.node.append(child.getNode());
      this.allChildren.push(child);
    });
  }

  destroy() {
    this.node.remove();
    this.deleteChildren();
  }

  insertChild(child: Component, index: number) {
    if (index >= this.allChildren.length) {
      this.appendChildren([child]);
      return;
    }

    this.node.insertBefore(child.getNode(), this.allChildren[index].getNode());
    this.allChildren.splice(index, 0, child);
  }

  deleteChild(child: Component) {
    const childIndex = this.allChildren.findIndex(currentChild => currentChild === child);
    if (childIndex === -1) return;
    this.allChildren[childIndex].destroy();
    this.allChildren.splice(childIndex, 1);
  }

  deleteChildren() {
    this.allChildren.forEach(child => {
      child.destroy();
    });

    this.allChildren = [];
  }

  getNode() {
    return this.node;
  }

  getAllChildren() {
    return this.allChildren;
  }

  setText(text: string) {
    this.node.textContent = text;
  }

  setAttribute(attribute: string, value: string) {
    this.node.setAttribute(attribute, value);
  }
  getAttribute(attribute: string) {
    return this.node.getAttribute(attribute);
  }

  removeAttribute(attribute: string) {
    this.node.removeAttribute(attribute);
  }

  addListener(eventName: string, callback: EventListener) {
    this.node.addEventListener(eventName, callback);
  }

  deleteListener(eventName: string, callback: EventListener) {
    this.node.removeEventListener(eventName, callback);
  }
}
