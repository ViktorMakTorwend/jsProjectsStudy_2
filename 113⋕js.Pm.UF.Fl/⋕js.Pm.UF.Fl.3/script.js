/*⋕js.Pm.UF.Fl.3*/

function testArrRepeat (par){
    let flag = false;
    for (let i = 1; i < par.length; i++){
        if (par[i]==par[i-1]){flag = true}
    }
    return flag;
}

let arr = [1, 3, 4, 4, 5];
console.log(testArrRepeat(arr));

