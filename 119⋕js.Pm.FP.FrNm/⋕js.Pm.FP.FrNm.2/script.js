/*⋕js.Pm.FP.FrNm.2*/

// принимает параметром массив и возвращать сумму элементов этого массива
function getSum(arr) {
	let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let arrNums = [1, 3, 4, 5];
console.log(getSum(arrNums));