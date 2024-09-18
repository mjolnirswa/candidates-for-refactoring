// нет типизации и валидации
function calculateTotalPrice(quantity, price) {
  return quantity * price;
}

// нет типизации и проверок
function formatPhoneNumber(number) {
  // в функции не проверяется, является ли входное значение строкой нужной длины, что может вызвать ошибки
  return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
}
