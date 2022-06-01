/*⋕js.Pm.FA.PFAP.9*/
    
function test(num, func1, func2) {
	return func1(num) + func2(num);
}

alert(test (3, function (num){return Math.pow(num, 2)}, function(num){return Math.pow(num, 3)}));