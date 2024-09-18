
// Подобные числа (18 и 65)  и строки (их лучше в enum) можно вынести в константы для улучшения читаемости и возможности изменения в одном месте.
if (
  user.age >= 18 &&
  user.age <= 65 &&
  user.employmentStatus === 'employed' &&
  user.criminalRecord === false // можно заменить на !user.criminalRecord
) {
  approveLoan();
}
