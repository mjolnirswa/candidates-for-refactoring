class A {
  // здесь класс A тесно связан с классом B через метод getB(). 
  // это создает высокую связанность и может нарушать принцип инкапсуляции.
  getB() {
    return new B();
  }
}

class B {
  // аналогично, класс B напрямую возвращает экземпляр C, что увеличивает связанность.
  // это нарушает принцип единой ответственности, так как B отвечает не только за свои задачи,
  getC() {
    return new C();
  }
}

class C {
  // ...
  doSomething() {
    // Логика
  }
}

// Использование транзитивного обращения
const a = new A();
a.getB().getC().doSomething();

// транзитивное обращение приводит к сильной связности между классами A, B и C, что усложняет тестирование и поддержку.
// если изменится интерфейс класса C, изменения затронут всю цепочку вызовов.
// если классы развиваются независимо, придется часто модифицировать вызовы в местах использования
