import java.lang.reflect.Modifier;
import java.lang.reflect.Field;

public class ItemUsage {
  public static void getItemInfo() {
    Item myObj = new Item("Phone", 100, 5);
    System.out.println(myObj.calcTotalPrice());

    // Get all fields declared on a class
    for (Field field : Item.class.getDeclaredFields()) {
      // Class variable check basically involves checking if the field is static or not
      // If it's static then it's a class variable
      if (Modifier.isStatic(field.getModifiers())) {
        System.out.println("Class variable: " + field.getName());
      // Else it's an instance variable
      } else {
        System.out.println("Instance variable: " + field.getName());
      }
    }

    myObj.applyDiscount();

    // In Java we don't have string interpolation, we have string concatenation & we can most get to String Formatting
    // System.out.println("Price after discount: " + myObj.price());
    System.out.println(
      String.format("Price after discount: %.2f", myObj.getPrice())
    );
  }
}
