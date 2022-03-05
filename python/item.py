class Item(object):
    """docstring for Item."""
    # This is a class variable which applies for all instances of a class
    # There's no concept of static in Python
    pay_rate = 0.8
    all = []
    # This is the constructor
    def __init__(self, name: str, price: float, qty: int):
        super(Item, self).__init__()

        # Run validations for the received arguments
        assert price >= 0, "Price can't be negative"
        assert qty >= 0, "Quantity can't be negative"

        # Assign to self object
        self.name = name
        self.price = price
        self.qty = qty

        Item.all.append(self)

    def calc_total_price(self):
        return self.price * self.qty

    def apply_discount(self):
        self.price *= self.pay_rate

    # This is similar to the `to_s` method in Ruby
    def __repr__(self):
        return "%s: $%.2f - %d" %(self.name, self.price, self.qty)
