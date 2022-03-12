require './stack'

class IntStack < Stack
  def push(item)
    if int?(item)
      @items.push(item)
    else
      puts "Invalid item: #{item} entered. This stack accepts integers only"
    end
  end

  private

  def int?(item)
    item.to_s.match(/^\d+$/i)
  end
end
