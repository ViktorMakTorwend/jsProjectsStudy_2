/*⋕js.Pm.FP.PU.4*/

let num1 = 234;
let num2 = 531;

function sumNums (num){
    let digits = String(num).split('');
    let digitsSum = 0;

    for (let digit of digits) {
        digitsSum += Number(digit);
    }
    return digitsSum;

}

function equalNumbers (n1, n2){
    if (sumNums(n1) == sumNums(n2)) {
        alert('суммы цифр совпадают');
    } else {
        alert('суммы цифр не совпадают');
    }
}

console.log(equalNumbers(num1, num2));