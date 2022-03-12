const Stack = require('./stack');

function IntStack() {
  // Super's constructor is called.
  Stack.call(this);
  // A new property added in SubClass.
  this.newProp = 'This is just to showcase a prop added to the subclass';
}

// Setting constructor to the function defined above
IntStack.prototype.constructor = IntStack;

// Inheriting stuff from SuperClass's prototype
IntStack.prototype = Object.create(Stack.prototype);

// Adding new methods to the SubClass
IntStack.prototype.isInt = function (str) {
  const regex = new RegExp(/^\d+$/gi);
  return regex.test(str);
}

// Overriding methods from SuperClass in the SubClass
IntStack.prototype.push = function (item) {
  if (this.isInt(item.toString())) {
    this.items.push(item);
  } else {
    console.error(
      `Invalid item: ${item} entered. This stack accepts integers only`
    );
  }
}

module.exports = IntStack;
