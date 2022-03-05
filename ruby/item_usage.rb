# Require all files in the directory
# Dir['./*.rb'].each { |file| require file }

require './item'

mein_item = Item.new('Phone', 100, 5)
puts mein_item.calc_total_price

# There's no way to get all class variables in Ruby

# All instance variables
puts mein_item.instance_variables
# All instance methods
puts mein_item.methods
