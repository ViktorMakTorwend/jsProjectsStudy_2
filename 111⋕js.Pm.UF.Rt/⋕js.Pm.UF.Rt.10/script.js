/*⋕js.Pm.UF.Rt.10*/

function func (num){
    let i = 0;
    while (true){
        num = num/2;
        if (num < 10){
            return i;
        }
        i++;
    }
}

console.log(func(100));