public class Item {
  // Instance variables
  // They are generally kept private
  private String name;
  private int price;
  private int qty;

  private static double payRate = 0.8;

  // Constructor
  public Item(String selfName, int selfPrice, int selfQty) {
    name = selfName;
    price = selfPrice;
    qty = selfQty;
  }

  public int calcTotalPrice() {
    return price * qty;
  }
}
