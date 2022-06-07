class MapQueue {
  #queue = new Map();
  #startPointer = 0;
  #endPointer = 0;

  #get(key) {
    return this.#queue.get(key);
  }

  #set(key, val) {
    this.#queue.set(key, val);
  }

  #remove(key) {
    this.#queue.delete(key);
  }

  #resetQueueIndex() {
    if (this.#startPointer === this.#endPointer) {
      this.#startPointer = 0;
      this.#endPointer = 0;
    }
  }

  #lastElemInQueue() {
    return this.size() === 1;
  }

  #clearQueue() {
    this.#queue.clear();
  }

  first() {
    return this.#get(this.#startPointer);
  }

  last() {
    return this.#get(this.#endPointer);
  }

  size() {
    return this.#queue.size;
  }

  isEmpty() {
    return !this.size();
  }

  addFirst(elem) {
    // First Element Addition
    if (this.isEmpty()) {
      this.#set(0, elem);
      this.#resetQueueIndex();
      return;
    }

    // Normal Addition
    this.#startPointer -= 1;
    this.#set(this.#startPointer, elem);
  }

  addLast(elem) {
    // First Element Addition
    if (this.isEmpty()) {
      this.#set(0, elem);
      this.#resetQueueIndex();
      return;
    }

    // Normal Addition
    this.#endPointer += 1;
    this.#set(this.#endPointer, elem);
  }

  removeFirst() {
    // Final Element Removal
    if (this.#lastElemInQueue()) {
      this.#clearQueue();
      this.#resetQueueIndex();
      return;
    }

    // Normal Removal
    this.#remove(this.#startPointer);
    this.#startPointer += 1;
  }

  removeLast() {
    // Final Element Removal
    if (this.#lastElemInQueue()) {
      this.#clearQueue();
      this.#resetQueueIndex();
      return;
    }

    // Normal Removal
    this.#remove(this.#endPointer);
    this.#endPointer -= 1;
  }
}

const myQueue = new MapQueue();
myQueue.addFirst(1);
myQueue.addLast(12);
myQueue.addFirst(65);
myQueue.addLast(23);
myQueue.removeLast();
