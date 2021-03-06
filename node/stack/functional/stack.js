function Stack() {
  this.items = [];
}

// Adding methods or properties to prototype ensures that methods & properties are available across all instances of the class
Stack.prototype.push = function (item) {
  this.items.push(item);
}

Stack.prototype.pop = function () {
  this.items.pop();
}

Stack.prototype.peek = function () {
  return this.items[this.items.length - 1];
}

Stack.prototype.all = function () {
  return this.items;
}

module.exports = Stack;
