# Require all files in the directory
# Dir['./*.rb'].each { |file| require file }

require './item'

unser_item = Item.new
puts unser_item.calc_total_price
