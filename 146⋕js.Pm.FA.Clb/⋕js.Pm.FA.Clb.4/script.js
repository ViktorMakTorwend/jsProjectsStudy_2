/*⋕js.Pm.FA.Clb.4*/
    
function each (arr, func){
    let result = [];
    for (let elArr of arr){
        result.push(func(elArr))
    }
    return result;
}

function cube(num) {
	return num ** 3;
}

let strArr = [2, 3, 4];
let res = each(strArr, cube);
console.log(res);
