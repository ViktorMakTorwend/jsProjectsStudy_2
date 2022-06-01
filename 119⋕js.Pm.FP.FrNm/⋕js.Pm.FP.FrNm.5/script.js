/*⋕js.Pm.FP.FrNm.5*/

function getPerfect (n1, n2){
    
    let arrPirfNums = [];
    for (let i = n1; i < n2; i++){
        let sum = 0;
        for (let j = n1; j < n2; j++){
            if (i%j == 0 && i != j){sum += j;}  
        }
        if (i == sum){arrPirfNums.push(i)}
    }
    return arrPirfNums;
}

let num1 = 1;
let num2 = 1000;
console.log(getPerfect(num1, num2));