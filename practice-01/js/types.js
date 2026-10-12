"use strict";

console.log("Выражение 1:", "8" + 2, "Тип:", typeof ("8" + 2));
console.log("Выражение 2:", "8" - 2, "Тип:", typeof ("8" - 2));
console.log("Выражение 3:", Number("8") + 2, "Тип:", typeof (Number("8") + 2));
console.log("Выражение 4:", "12" > "3", "Тип:", typeof ("12" > "3"));
console.log("Выражение 5:", 12 === "12", "Тип:", typeof (12 === "12"));
console.log("Выражение 6:", Number(""), "Тип:", typeof Number(""));
console.log("Выражение 7:", Number("text"), "Тип:", typeof Number("text"));
console.log("Выражение 8:", Boolean("false"), "Тип:", typeof Boolean("false"));
console.log("Выражение 9:", typeof null, "Тип самого результата:", typeof typeof null);
console.log("Выражение 10:", typeof NaN, "Тип самого результата:", typeof typeof NaN);