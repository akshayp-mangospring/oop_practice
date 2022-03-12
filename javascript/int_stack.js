const Stack = require('./stack');

class IntStack extends Stack {
  constructor() {
    super();
    this.isInt = (str) => {
      const regex = new RegExp(/^\d+$/gi);
      return regex.test(str);
    };
  }

  // Overriding method from SuperClass in the SubClass
  push(item) {
    if (this.isInt(item.toString())) {
      this.items.push(item);
    } else {
      console.error(
        `Invalid item: ${item} entered. This stack accepts integers only`
      );
    }
  }
}
