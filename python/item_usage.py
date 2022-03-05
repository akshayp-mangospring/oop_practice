# Fun facts:
# Python is implemented in C, since it is an interpreted language
# Even Ruby & JS are implemented in C/C++, they are interpreted languages too.
# But unlike JS; Ruby & Python have strict typing.
# Ruby & Python are very similar.

from item import Item

mein_item = Item("Phone", 100, 15)

zweites_item = Item("Laptop", 1000, 3)

print(mein_item.calc_total_price())
print(zweites_item.calc_total_price())

print(Item.pay_rate)
print(mein_item.pay_rate)

# Gets all attributes for the class level
print(Item.__dict__)
# Gets all attributes for the instance level
print(mein_item.__dict__)
