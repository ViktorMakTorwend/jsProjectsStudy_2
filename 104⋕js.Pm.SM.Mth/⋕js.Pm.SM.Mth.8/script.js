/*⋕js.Pm.SM.Mth.8*/

let arr = [];

for (let i = 0; i < 10; i++){
    arr.push(Math.round(getRandomInt(1, 100)));
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(arr);