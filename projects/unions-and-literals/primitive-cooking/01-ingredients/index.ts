// Please correct any type annotation problems here! ✨
let arugula: number;
let dressing: string;
let lettuce: number;
let mealDate: string;

arugula = 2;
dressing = "honey dijon";
lettuce = undefined;
mealDate = new Date("September 13, 2021");

console.log(`We're starting on ${mealDate} with a dressing of ${dressing}.`);

if (arugula) {
	console.log(`There are ${arugula} arugula serving(s) for this first meal.`);
}

if (lettuce) {
	console.log(`There are ${lettuce} lettuce serving(s) for this first meal.`);
}

arugula = undefined;
dressing = "balsamic vinaigrette";
lettuce = 1;
mealDate = new Date("March 13, 2022");

console.log(`Next up, a ${mealDate} meal with a dressing of ${dressing}.`);

if (arugula) {
	console.log(`This time, there are ${arugula} arugula serving(s).`);
}

if (lettuce) {
	console.log(`This time, there are ${lettuce} lettuce serving(s).`);
}

export {};
