const createPayment = (isToken: Boolean) => {
  // isToken имеет тип Boolean с заглавной буквы, но лучше использовать примитивный тип boolean
  // так как примитивные типы более легковесны
  if (isToken) {
    const token = getUrl().slice(); // Возвращает срез строки URL, но неясно, почему используется slice()
    // Если цель была клонировать строку, slice не нужен, так как строка в JavaScript неизменяема
    system.createTransaction(token).setTransaction();
  } else {
    const cardNumber = account.getCardNumber();  // Получает номер карты, но лучше добавить валидацию перед отправкой
    userAccount.createCardPayment(cardNumber).postTransactionToServer();
  }
};
