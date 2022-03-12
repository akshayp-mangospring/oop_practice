class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    return this.items[this.items-length - 1];
  }

  all() {
    return this.items;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }
}

module.exports = Stack;
