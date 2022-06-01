/*⋕js.Pm.FP.LCF.1*/

function getGreatestCommonDivisor (n1, n2){
    return  arrDiv(arrDivisors(n1), arrDivisors(n2))
}

function arrDivisors (num){
    let numDivisors = [];
    for (let i = 1; i < num; i++){
        if(num%i == 0){numDivisors.push(i)}
    }
    return numDivisors;
}

function arrDiv(arr1, arr2){
    let commonDivisor = [];
    for (let el of arr1){
        for (let elem of arr2){
            if (el == elem){commonDivisor.push(el)}
        }
    }
    let max = Math.max.apply(null, commonDivisor);
    return max;
}

 let num1 = 12; 
let num2 = 18;
console.log(getGreatestCommonDivisor(num1, num2)); 