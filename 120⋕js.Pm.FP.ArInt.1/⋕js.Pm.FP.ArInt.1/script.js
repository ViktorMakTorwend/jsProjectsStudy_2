/*⋕js.Pm.FP.ArInt.1*/

let arr1 = [1, 2, 3, 9, 4, 5, 6];
let arr2 = [2, 3, 4, 5, 6];

function getInt (a1, a2){
    let arrResult = [];
    for (let i = 0; i < a1.length; i++){
        if(findEl(a1[i],a2)){
            arrResult.push(a1[i]);
        }    
    }
    return arrResult
};

function findEl (num, arr){
    for (let i = 0; i < arr.length; i++){
        if(num == arr[i]){return num}
    }  
};

console.log(getInt(arr1, arr2));