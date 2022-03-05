public class Main {
  public static void main(String args[]) {
    Item item1 = new Item("Phone", 100, 1);
    Item item2 = new Item("Laptop", 1000, 3);
    Item item3 = new Item("Cable", 10, 5);
    Item item4 = new Item("Mouse", 50, 5);
    Item item5 = new Item("Keyboard", 75, 5);

    for (Item item : Item.getAllItems()) {
      System.out.println(
        String.format(
          "%s: $%.2f, %d", item.getName(), item.getPrice(), item.getQuantity()
        )
      );
    }
  }
}
