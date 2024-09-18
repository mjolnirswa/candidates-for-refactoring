class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }
  public subtract(a: number, b: number): number {
    return a - b;
  }
  public multiply(a: number, b: number): number {
    return a * b;
  }
  public divide(a: number, b: number): number {
    // здесь необходимо добавить проверку на деление на 0, чтобы избежать ошибки при выполнении программы
    return a / b;
  }
}
