/*⋕js.Pm.FA.RMs.2*/

function outElementsArr(obj){
    for (let key in obj){
        if ( typeof(obj[key]) == 'object'){
            outElementsArr(obj[key]);
        }
        else {console.log(obj[key])}
    }  
}

outElementsArr ({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});