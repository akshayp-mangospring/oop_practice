class ArrayQueue {
  #queue = [];

  first() {
    return this.#queue[0];
  }

  last() {
    return this.#queue[this.size() - 1];
  }

  size() {
    return this.#queue.length;
  }

  isEmpty() {
    return !this.size();
  }

  addFirst(elem) {
    this.#queue.unshift(elem);
  }

  addLast(elem) {
    this.#queue.push(elem);
  }

  removeFirst() {
    return this.#queue.shift();
  }

  removeLast() {
    return this.#queue.pop();
  }
}
