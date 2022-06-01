/*⋕js.Pm.FP.PU.3*/

function reverseNum (nums){
    let result = [];
    for (let num of nums) {
	    result.push(String(num).split('').reverse().join(''));
    }
    return result;
}

let nums = [123, 456, 789];
console.log(reverseNum(nums));

