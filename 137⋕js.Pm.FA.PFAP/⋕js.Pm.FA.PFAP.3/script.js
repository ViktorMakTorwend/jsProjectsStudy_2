/*⋕js.Pm.FA.PFAP.3*/

    function func1() {return 1;};
    function func2() {return 2;};
    function func3() {return 3;};

    test(func1, func2, func3);

function test(f1, f2, f3){
    alert(f1() + f2() + f3());
}
