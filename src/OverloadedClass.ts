class OverloadedClass {
  field1: number;
  field2: string;
  field3: boolean;
  field4: Date;
  field5: number;
  field6: number;
  field7: number;
  field8: number;
  field9: number;
  field10: number;
  // ... другие поля и методы

  // Класс, содержащий много полей (особенно больше 5-7), часто нарушает принцип единой ответственности
  // Большое количество полей делает класс сложным для поддержки, поскольку разработчикам становится сложнее отслеживать, за что отвечает каждый атрибут
}
