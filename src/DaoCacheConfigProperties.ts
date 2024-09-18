class DaoCacheConfigProperties {
  alive: number; // alive cache time in days - время жизни кэша указано в днях, это не всегда удобно, возможно лучше использовать более гибкие единицы времени, например, миллисекунды или секунды.
  elements: number; // maximum elements in cache - хорошо бы добавить проверки на неотрицательные значения.
}
