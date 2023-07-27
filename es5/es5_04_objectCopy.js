const car = {
    color : "red"
};
const secondCar = car;
const thirdCar = Object.assign({}, car);

car.wheels = 4;

console.log("car.color : " + car.color);
console.log("secondCar.color : " + secondCar.color );
console.log("thirdCar.color : " + thirdCar.color );
console.log("car.wheels : " + car.wheels);
console.log("secondCar.wheels : " + secondCar.wheels );
console.log("thirdCar.wheels : " + thirdCar.wheels );
console.log("\n");
console.log(car == secondCar);
console.log(car === secondCar);
console.log(car == thirdCar);
console.log(car === thirdCar);
