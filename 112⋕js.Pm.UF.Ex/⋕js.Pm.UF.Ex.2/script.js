/*⋕js.Pm.UF.Ex.2*/

function getDigitSum(num) {

    let str = String(num), sum = 0;
    for (let i = 0; i < str.length; i++){
        sum += Number(str[i]);
    }
    return sum;
}   

console.log(getDigitSum(1234));



	
