/*⋕js.Pm.SM.Mth.3*/

let arr = [4, 2, 5, 19, 13, 0, 10];
let sumCub = 0;

for (let i = 0; i < arr.length; i++){
    sumCub += Math.pow(arr[i],3);
}

console.log(Math.sqrt(sumCub));