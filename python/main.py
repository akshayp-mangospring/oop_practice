# Fun facts:
# Python is implemented in C, since it is an interpreted language
# Even Ruby & JS are implemented in C/C++, they are interpreted languages too.
# But unlike JS; Ruby & Python have strict typing.
# Ruby & Python are very similar.

from item import Item

item1 = Item("Phone", 100, 1)
item2 = Item("Laptop", 1000, 3)
item3 = Item("Cable", 10, 5)
item4 = Item("Mouse", 50, 5)
item5 = Item("Keyboard", 75, 5)

print(Item.all)
