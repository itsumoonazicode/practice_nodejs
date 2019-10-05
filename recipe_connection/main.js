const cities = require("cities");

var myCity = cities.zip_lookup("10016");
console.log(myCity);

exports.numbers = [1,2,3,4,5];
exports.addNum = (x,y) => {
	return x + y;
};