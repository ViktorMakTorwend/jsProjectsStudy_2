/*⋕js.Pm.FP.FrNm.1*/

// принимает параметром число и возвращает массив собственных делителей этого числа
function getOwnDivisors(num) {
    let arrDivisors = [];
    for ( let i = 1; i < num; i++){
        if(num%i == 0){arrDivisors.push(i)}
    }
    return arrDivisors;
}

console.log(getOwnDivisors(24));