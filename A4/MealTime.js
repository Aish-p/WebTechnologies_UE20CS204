exports.mealTime = (time = new Date()) => {
const hour = time.getHours();
if (hour > 7 && hour < 10)
return 'Breakfast';
else if (hour > 10 && hour < 18)
return 'Lunch';
else if (hour > 18 && hour < 24)
return 'Dinner';
}
