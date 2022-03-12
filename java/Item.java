import java.util.ArrayList;
import java.util.List;

public class Item {
  // Class variables
  // They are generally kept private
  private static double discountRate = 0.8;
  private static List<Item> all = new ArrayList<>();

  // Instance variables
  // They too are generally kept private
  private String name;
  private double price;
  private int qty;
  private double instPayRate;

  // Fun Facts:
  // Ruby doesn't have the concept of method overloading, nor does Go or Python
  // The fact is that dynamically typed languages like Ruby or Python aren't compiled, method overloading is supported in compiled languages only like Java, C++. But not every compiled language supports overloading.
  // C doesn't support it, nor does Go.
  // Method overloading is a feature of statically typed language in which binding of methods takes place during compile time. But Ruby or Python being a dynamically typed language, it does not support static binding at all.
  // However, there are ways in which we can achieve overloading. In Go we can use variadic functions, in Ruby we can use optional arguments, keyword arguments or even variable arguments, in Python we can use multipledispatch package.

  // Here we have chosen to overload methods with different arguments & function signatures
  private void exceptionOnError(String value, String label) {
    if (value.length() <= 0) {
      throw new IllegalArgumentException(label + " can't be blank");
    }
  }

  private void exceptionOnError(double value, String label) {
    if (value < 0.0) {
      throw new IllegalArgumentException(label + " can't be negative");
    }
  }

  private void exceptionOnError(int value, String label) {
    if (value < 0) {
      throw new IllegalArgumentException(label + " can't be negative");
    }
  }

  // Constructor
  public Item(String selfName, double selfPrice, int selfQty) {
    // Validation of arguments
    exceptionOnError(selfName, "Name");
    exceptionOnError(selfPrice, "Price");
    exceptionOnError(selfQty, "Quantity");

    name = selfName;
    price = selfPrice;
    qty = selfQty;
    instPayRate = discountRate;

    all.add(this);
  }

  // Attribute Getter method
  public double getPrice() {
    return price;
  }

  public String getName() {
    return name;
  }

  public int getQuantity() {
    return qty;
  }

  public double calcTotalPrice() {
    return price * qty;
  }

  public void applyDiscount() {
    price *= instPayRate;
  }

  public static List<Item> getAllItems() {
    return all;
  }
}
