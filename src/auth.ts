type TPayment = {
  amount: number; // здесь важно добавить валидацию значений, так как сумма платежа может быть отрицательной или некорректной.
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number; // Хорошо бы добавить , что возвращаемое значение — rcCode.
};

const auth = (payment: TPayment, gateway: TGatewayService) => {
  const rcCode = gateway.sendAuth(payment); // нет валидации

  // мутация объекта payment. Это может быть нежелательно, так как изменяется исходный объект.
  // лучше избегать мутаций и возвращать новый объект с обновленным значением rcCode.

  payment.rcCode = rcCode;
};
