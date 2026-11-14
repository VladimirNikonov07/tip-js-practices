"use strict";

const totalTasks = 12;
const completedTasks = 5;

if (
  typeof totalTasks !== "number" ||
  typeof completedTasks !== "number" ||
  !Number.isFinite(totalTasks) ||
  !Number.isFinite(completedTasks) ||
  !Number.isInteger(totalTasks) ||
  !Number.isInteger(completedTasks)
) {
  console.log("Ошибка: входные данные должны быть целыми конечными числами.");
} else if (totalTasks < 0 || completedTasks < 0) {
  console.log("Ошибка: отрицательное количество задач.");
} else if (totalTasks > 1000) {
  console.log("Ошибка: количество задач превышает верхнюю границу.");
} else if (completedTasks > totalTasks) {
  console.log("Ошибка: выполнено больше задач, чем существует.");
} else if (totalTasks === 0 && completedTasks === 0) {
  console.log("Задач пока нет");
} else {
  const remainingTasks = totalTasks - completedTasks;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  let status = "";
  if (completedTasks === 0) {
    status = "Не начато";
  } else if (completedTasks === totalTasks) {
    status = "Завершено";
  } else {
    status = "В работе";
  }

  console.log(`Всего задач: ${totalTasks}`);
  console.log(`Выполнено: ${completedTasks}`);
  console.log(`Осталось: ${remainingTasks}`);
  console.log(`Прогресс: ${progressPercentage.toFixed(1)}%`);
  console.log(`Статус: ${status}`);
}
