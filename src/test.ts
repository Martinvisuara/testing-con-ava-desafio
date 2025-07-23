import test from "ava";
import { Product, User } from "./index";

test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});
test("Testeo la clase User y sus métodos", (t) => {
  //mock
  const martin = new User("Martin");
  const product = new Product("Product 1", 10);
  martin.addProduct(product);

  t.is(martin.name, "Martin");
  t.is(martin.products[0].name, "Product 1");
  t.is(martin.products[0].price, 10);
});
