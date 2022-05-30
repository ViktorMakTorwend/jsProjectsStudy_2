/*⋕js.Pm.SM.St.12*/

let str = '1-2-3-4-5';
  
let arr = str.split('-');
for (let i=0; i < arr.length; i++){
    arr[i] = Number(arr[i]);
}
console.log(arr);