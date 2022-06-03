/*⋕js.Pm.FA.AF.3*/

function each (arr, func){
    let resArr = [];
    for (let subArr of arr){
        for (let i = 0; i < subArr.length; i++){
         resArr.push(func(subArr[i], i));
        }      
    }
    return resArr;
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result = each(arr, (elem, index) => elem * index > 10);

console.log(result);

