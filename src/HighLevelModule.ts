class LowLevelModule {
  doSomething() {
    // реализация
  }
}

class HighLevelModule {
  private lowLevelModule: LowLevelModule;

  constructor() {
    // создание экземпляра внутри конструктора нарушает принцип инверсии зависимостей
    this.lowLevelModule = new LowLevelModule(); // создание экземпляра
    // HighLevelModule напрямую зависит от конкретной реализации LowLevelModule, что усложняет тестирование и замену модуля.
  }

  doSomethingElse() {
    this.lowLevelModule.doSomething(); // использование непосредственной зависимости
    // использование непосредственной зависимости усложняет поддержку и расширение.
  }
}
