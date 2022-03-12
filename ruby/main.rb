# Require all files in the directory
# Dir['./*.rb'].each { |file| require file }

require './item'
require './int_stack'

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

mein_stack = IntStack.new
mein_stack.push(20)
mein_stack.push(30)
mein_stack.push('a')
mein_stack.push({})
mein_stack.push(true)
mein_stack.push(213)
mein_stack.push(324)
mein_stack.push(213)
mein_stack.pop()

puts mein_stack.all
