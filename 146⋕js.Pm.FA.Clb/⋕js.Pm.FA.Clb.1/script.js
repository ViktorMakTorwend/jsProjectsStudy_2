/*⋕js.Pm.FA.Clb.1*/
    
function each (arr, func){
    let result = [];
    for (let elArr of arr){
        result.push(func(elArr))
    }
    return result;
}

let res = each([2,3,4], function (num){return num * 2});
console.log(res);
