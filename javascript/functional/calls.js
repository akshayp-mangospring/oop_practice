const IntStack = require('./int_stack');

const meinStack = new IntStack();
meinStack.push(23);
meinStack.push('Hello');
meinStack.push(34);
meinStack.push(true);
meinStack.push(45);

console.log(meinStack.all());
console.log(meinStack.newProp);
