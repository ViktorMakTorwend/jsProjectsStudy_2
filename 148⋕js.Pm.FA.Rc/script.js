/*⋕js.Pm.FA.Rc.2*/

//С помощью рекурсии найдите сумму квадратов элементов этого массива.

let arrNums = [1, 2, 3, 4, 5];

function getSumSquare (arr){
    let sumSquare = Math.pow(arr.shift(), 2);

    if(arr.length !== 0){
        sumSquare += getSumSquare(arr)
    }
    return sumSquare;
}

console.log(getSumSquare(arrNums));
