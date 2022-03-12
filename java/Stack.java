import java.util.ArrayList;
import java.util.List;

public class Stack {
  private static List<Integer> items = new ArrayList<>();

  public Stack() {}

  public void push(int item) {
    items.add(item);
  }

  public void pop() {
    items.remove(items.size() - 1);
  }

  public int peek() {
    return items.get(items.size() - 1);
  }

  public List<Integer> all() {
    return items;
  }
}
