type TMutableList<T> = T[];
// мутация данных может привести к ошибкам в будущем, особенно в больших проектах.
// лучше использовать иммутабельные методы.

enum WarningType {
  // LEGACY_CODE_DEPENDENCY равен 0, лучше указать что-то более конкретное
  LEGACY_CODE_DEPENDENCY,
}

type TWarning = {
  type: WarningType;
};

const Warning = (type: WarningType): TWarning => {
  return {
    type,
  };
};

const addError = (errors: TMutableList<TWarning>) => {
  // опять же, лучше придерживаться иммутабельного подхода (возвращать новый массив через spread оператор например)
  // return [...errors, Warning(WarningType.LEGACY_CODE_DEPENDENCY)];
  errors.push(Warning(WarningType.LEGACY_CODE_DEPENDENCY));
};
