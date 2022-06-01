/*⋕js.Pm.UF.Ex.1*/

function func(arr) {
    let sumQ = 0;
    for (let i = 0; i < arr.length; i++){
        sumQ += Math.pow(arr[i], 2);
    }
    return sumQ;
}

let arr = [1, 2, 3];
console.log(func(arr));
	
