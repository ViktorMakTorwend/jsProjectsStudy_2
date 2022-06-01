/*⋕js.Pm.FP.PU.2*/

function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	
	return sum;
}

let arrYearSum_13 = [];
let firstYear = 1;
let lastYear = 2030;

for (let i = firstYear; i < lastYear; i++){
    if(getDigitsSum(i) == 13){arrYearSum_13.push(i)}
};

console.log(arrYearSum_13);