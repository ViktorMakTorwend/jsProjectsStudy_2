/*⋕js.Pm.FA.RMs.2*/

let resArr = [];

function turnElementsArr(arr){
    
    for (let elArr of arr){
        if ( typeof elArr == 'object'){
            turnElementsArr(elArr)
        }
        else {
            resArr.push(elArr);
        }
    } 
    return resArr; 
}

 let result = turnElementsArr ([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
 console.log(result);
