/*⋕js.Pm.FP.LCF.2*/

function getSimpleNums (n1, n2){
    return simpleNum(n1) && simpleNum(n2);
}

function simpleNum (num){
    let flag = true;
    for (let i = 2; i < num; i++){
        if(num%i == 0){flag = false}
    }
    return flag;
}

let num1 = 11; 
let num2 = 12;
console.log(getSimpleNums(num1, num2));  

