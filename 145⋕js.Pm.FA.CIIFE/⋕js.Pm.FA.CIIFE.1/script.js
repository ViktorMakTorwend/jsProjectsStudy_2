/*⋕js.Pm.FA.CIIFE.1*/
    
let counter = function (){
    let num = 0;
    return function(){
        alert(num);
        num++;
    }
}();

counter();
counter();
counter();
