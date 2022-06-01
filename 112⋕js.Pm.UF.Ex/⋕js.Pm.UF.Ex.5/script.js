/*⋕js.Pm.UF.Ex.5*/

function delElem (num, arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] == num){arr.splice(i, 1)}
    }
    return arr;
}

let n = 3;
let a = [2, 3, 4, 5, 3, 6, 8];
console.log(delElem(n,a));
	
