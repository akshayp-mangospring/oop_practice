class Stack {
  #stack = new Map();

  #lastKey() {
    return this.getSize() - 1;
  }

  // Public Methods
  getSize() {
    return this.#stack.size;
  }

  isEmpty() {
    return !this.getSize();
  }

  push(elem) {
    this.#stack.set(this.getSize(), elem);
  }

  pop() {
    if (this.isEmpty()) return;

    const lastElem = this.peek();
    this.#stack.delete(this.#lastKey());
    return lastElem;
  }

  peek() {
    return this.#stack.get(this.#lastKey());
  }

  getStack() {
    return Array.from(this.#stack.values());
  }
}

const myStack = new Stack();
myStack.push(12);
myStack.push(22);
myStack.push(54);
console.log(myStack);
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.getStack());
myStack.push(89);
console.log(myStack.peek());
