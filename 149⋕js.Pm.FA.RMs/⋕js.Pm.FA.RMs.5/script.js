

function arrElemsSquare (a){
    let arrRes = [];
    let k = 0;
     function innerFunc(arr){
        for (let i = 0; i < arr.length; i++){
            if(typeof arr[i] == 'object'){
                arr[i] = innerFunc(arr[i]);
            }
            else {
                arrRes[k] = Math.pow(arr[i], 2);
                k++;
            }
        }
        return arrRes;
    }
    return innerFunc(a);   
}

let result = arrElemsSquare([1, [2, 7, 8], [3, 4], [5, [6, 7]]]);
console.log(result);


