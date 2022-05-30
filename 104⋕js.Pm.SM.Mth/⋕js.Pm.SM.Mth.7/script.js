/*⋕js.Pm.SM.Mth.7*/

function getRandomArbitary(min, max) {
	return Math.random() * (max - min) + min;
}

console.log(Math.round(getRandomArbitary(1,100)));