class Item
  # These are basically the getter & setter methods of instance variables
  attr_accessor :name, :price, :qty

  # Class variables in Ruby are declared with the `@@` symbol
  # There's no concept of static in Ruby
  @@pay_rate = 0.8

  # Instance variables are declared with `@` symbol in Ruby

  # This is the constructor
  def initialize(name, price, qty)
    @name = name
    @price = price
    @qty = qty
  end

  def calc_total_price
    @price * @qty
  end
end
