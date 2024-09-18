
// Модуль 1
// нет типизации
function calculateTotalPrice(items) {
  let totalPrice = 0;

  // метод forEach изменяет внешнюю переменную, что создает побочные эффекты.
  // можно использовать более чистый способ расчета через reduce + засчет этого можно избавить от лишней переменной totalPrice
  items.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
}

// Модуль 2
// нет типизации
function applyDiscount(totalPrice, discountPercentage) {
  // общая логика корректна, однако стоит учитывать, что не проверяется корректность переданных значений.
  // например, нужно убедиться, что discountPercentage — это число в диапазоне от 0 до 100.
  return totalPrice * (1 - discountPercentage / 100);
}
