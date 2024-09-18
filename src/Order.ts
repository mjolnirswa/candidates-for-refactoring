class Order {
  private customer: Customer;

  constructor() {
    this.customer = new Customer(); // Создание экземпляра Customer внутри конструктора нарушает принцип инверсии зависимостей
  }

  getTotalPrice(): number {
    return this.customer.calculateTotalPrice(); // Прямое взаимодействие с Customer затрудняет тестирование и подмену зависимостей
  }
}

class Customer {
  private items: Item[];

  calculateTotalPrice(): number {
    // вычисление общей цены на основе items
    // Логика вычисления должна учитывать случаи, когда items может быть пустым или неинициализированным
  }
}
