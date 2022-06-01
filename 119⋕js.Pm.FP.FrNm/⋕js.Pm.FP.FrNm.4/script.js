/*⋕js.Pm.FP.FrNm.4*/
function getFreindly (n1, n2){
    let arr = [];
    let arrFrendNums = [];
   
    for (let i = n1; i < n2; i++){
        for (let j = n1; j < n2; j++){
            if (i != j && isFreindly(i,j)) {
                if (!(arr.includes(j) || arr.includes[i])){
                    arr.push(i,j);
                }             
            }    
        } 
    }
    // Можно ли упростить?
    for (let k = 0, j = 0; k < arr.length/2; k++){
        arrFrendNums[k] = [];
        for (let i = 0; i < 2; i++){
            arrFrendNums[k][i] = arr[j];
            j++;
        }  
    }
    return (arrFrendNums);
}

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

console.log(getFreindly(1, 3000));