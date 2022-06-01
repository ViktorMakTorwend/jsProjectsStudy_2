/*⋕js.Pm.FA.PFAP.1*/

test(
    function() {return 1;},
    function() {return 2;},
    function() {return 3;},
);

function test(func1, func2, func3){
    alert(func1() + func2() + func3());
}
