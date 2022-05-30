/*⋕js.Pm.SM.Prm.4*/

let str = 'word1 word2 word3';

let arr = str.split(' ');
for (let word of arr){
    console.log(word.slice(0,1).toUpperCase() + word.slice(1));
}
