class ArraySet {
  #set = [];

  add(elem) {
    if (this.has(elem)) return false;

    this.#set.push(elem);
    return true;
  }

  remove(elem) {
    if (!this.has(elem)) return;

    return this.#set.splice(this.#set.indexOf(elem), 1);
  }

  has(elem) {
    return this.#set.indexOf(elem) > -1;
  }

  size() {
    return this.#set.length;
  }

  isEmpty() {
    return !this.size();
  }

  values() {
    return this.#set;
  }

  union(otherSet) {
    const unionSet = new ArraySet();
    const otherSetValues = otherSet.values();

    this.values().forEach((e) => {
      unionSet.add(e);
    });

    otherSetValues.forEach((e) => {
      unionSet.add(e);
    });

    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new ArraySet();

    this.values().forEach((e) => {
      if(otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new ArraySet();

    this.values().forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  }

  subset(otherSet) {
    return this.values().every((e) => otherSet.has(e));
  }
}

const mySet = new ArraySet();
mySet.add('a');
mySet.add('a');
mySet.add('b');
console.log(mySet.values());
