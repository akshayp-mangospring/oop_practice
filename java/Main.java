public class Main {
  public static void main(String args[]) {
    Item myObj = new Item("Phone", 100, 5);
    myObj.applyDiscount();
    System.out.println("Price after discount: " + myObj.price());
  }
}
