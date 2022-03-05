class Item
  # These are basically the getter & setter methods of instance variables
  attr_accessor :name, :price, :qty

  # Class variables in Ruby are declared with the `@@` symbol
  # There's no concept of static in Ruby
  @@pay_rate = 0.8
  @@all = []

  # Class methods
  # We need to explicitly make the class variables accessible outside with the help of getter methods, otherwise it won't be accessible

  # All instances created of a class
  def self.all
    @@all
  end

  def self.pay_rate
    @@pay_rate
  end

  # Instance variables are declared with `@` symbol in Ruby

  # This is the constructor
  def initialize(name, price, qty)
    @name = name
    @price = price
    @qty = qty

    @@all.push(self)
  end

  def to_s
    "#{@name}: $#{@price}, #{@qty}"
  end

  def calc_total_price
    @price * @qty
  end
end
