# Require all files in the directory
# Dir['./*.rb'].each { |file| require file }

require './item'

# mein_item = Item.new('Phone', 100, 5)
# puts mein_item.calc_total_price

# There's no way to get all class variables in Ruby

# All instance variables
# puts mein_item.instance_variables
# All instance methods
# puts mein_item.methods

item1 = Item.new('Phone', 100, 1)
item2 = Item.new('Laptop', 1000, 3)
item3 = Item.new('Cable', 10, 5)
item4 = Item.new('Mouse', 50, 5)
item5 = Item.new('Keyboard', 75, 5)

puts Item.all
puts Item.pay_rate
