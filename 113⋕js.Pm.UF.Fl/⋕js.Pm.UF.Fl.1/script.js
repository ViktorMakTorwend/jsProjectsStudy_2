/*⋕js.Pm.UF.Fl.1*/

function testArrPositive (par){
    let flag = true;
    for (let el of par){
        if (el < 0){flag = false}
    }
    return flag;
}

let arr = [1, 3, 4, 4];
console.log(testArrPositive(arr));