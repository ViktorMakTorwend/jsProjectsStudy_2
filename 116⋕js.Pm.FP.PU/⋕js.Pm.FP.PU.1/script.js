/*⋕js.Pm.FP.PU.1*/

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	
	return true;
}

let arrPrimeNumber = [];
numFirst = 1;
numLast = 100;
for (let i = numFirst; i <= numLast; i++){
    if (isPrime(i)){arrPrimeNumber.push(i)}
}

console.log(arrPrimeNumber);