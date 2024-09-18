// все волшебные числа нужно вынести в константы
// стоит добавить проверку данных, возвращаемых функциями getTenthRate() и getTenthsWorked().
function calculateWeeklyPay(overtime: boolean): number {
  const tenthRate: number = getTenthRate();
  const tenthsWorked: number = getTenthsWorked();
  const straightTime: number = Math.min(400, tenthsWorked);
  const overTime: number = Math.max(0, tenthsWorked - straightTime);
  const straightPay: number = straightTime * tenthRate;
  const overtimeRate: number = overtime ? 1.5 : 1.0 * tenthRate; // ошибка в логике: умножение `1.0 * tenthRate` может привести к неожиданным результатам, так как десятичный множитель применяется только для сверхурочных.
  const overtimePay: number = Math.round(overTime * overtimeRate);
  return straightPay + overtimePay;
}
