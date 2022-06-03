/*⋕js.Pm.FA.Clb.2*/
    
function each (arr, func){
    let result = [];
    for (let elArr of arr){
        result.push(func(elArr))
    }
    return result;
}

let strArr = ['viktor', 'alex'];
let res = each(strArr, function (str){return str.split('').reverse().join('')});
console.log(res);
