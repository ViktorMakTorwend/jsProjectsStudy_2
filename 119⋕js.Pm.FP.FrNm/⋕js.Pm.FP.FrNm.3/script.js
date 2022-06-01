/*⋕js.Pm.FP.FrNm.3*/

function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));
	
	return sum1 == num2 && sum2 == num1;
}

function getOwnDivisors(num) {
    let arrDivisors = [];
    for ( let i = 1; i < num; i++){
        if(num%i == 0){arrDivisors.push(i)}
    }
    return arrDivisors;
}

function getSum(arr) {
	let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(isFreindly(220,284));