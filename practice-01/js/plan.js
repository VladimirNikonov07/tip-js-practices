"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

if (
  typeof totalTasks !== "number" ||
  typeof completedTasks !== "number" ||
  typeof dailyLimit !== "number" ||
  !Number.isFinite(totalTasks) ||
  !Number.isFinite(completedTasks) ||
  !Number.isFinite(dailyLimit) ||
  !Number.isInteger(totalTasks) ||
  !Number.isInteger(completedTasks) ||
  !Number.isInteger(dailyLimit)
) {
  console.log("Ошибка: все входные параметры должны быть целыми конечными числами.");
} else if (totalTasks < 0 || completedTasks < 0 || dailyLimit < 1 || dailyLimit > 1000) {
  console.log("Ошибка: некорректные диапазоны входных данных.");
} else if (completedTasks > totalTasks) {
  console.log("Ошибка: количество выполненных задач превышает общее число задач.");
} else {
  let remaining = totalTasks - completedTasks;
  console.log(`Осталось задач: ${remaining}`);

  let day = 0;

  while (remaining > 0) {
    day += 1;
    const tasksDoneToday = Math.min(dailyLimit, remaining);
    remaining -= tasksDoneToday;

    console.log(`День ${day}: выполнено ${tasksDoneToday}, осталось ${remaining}`);
  }

  console.log(`Потребуется дней: ${day}`);
}
