const car1 = new Object();
const car2 = {}

car1.wheels = 4;
car1.color = "red";

car2.wheels = 4;
car2.color = "green";

console.log("car1.wheels : " + car1.wheels);
console.log("car1.color : " + car1.color +"\n");
console.log("car2.wheels : " + car2['wheels']);
console.log("car2.color : " + car2['color']);

