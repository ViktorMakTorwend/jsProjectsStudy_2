/*⋕⋕js.Pm.FA.FA.1*/

let arr = [
    function() {return 1},
    function() {return 2},
    function() {return 3},
];

alert(arr[2]());

console.log(arr[0]() + arr[1]() + arr[2]);
for (let elAr of arr){
    alert(elAr());
}
