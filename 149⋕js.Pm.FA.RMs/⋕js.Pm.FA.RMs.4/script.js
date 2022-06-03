/*⋕js.Pm.FA.RMs.4*/

let str = '';

function turnStrArr (arr) {
    for (let syb of arr){
        if(typeof syb == 'object'){
            turnStrArr(syb);
        }
        else { str += syb}
    }
    return str;
}

let result = turnStrArr(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]);
console.log(result);





