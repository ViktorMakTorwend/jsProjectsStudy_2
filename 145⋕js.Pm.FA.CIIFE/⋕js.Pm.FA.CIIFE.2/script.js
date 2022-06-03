/*⋕js.Pm.FA.CIIFE.2*/
    
let counter = function (){
    let num = 1;
    return function(){
        if (num <= 5){
            alert(num);
            num++;
        }
        else{num = 1}      
    }
}();

counter();
counter();
counter();
counter();
counter();
counter();
counter();


