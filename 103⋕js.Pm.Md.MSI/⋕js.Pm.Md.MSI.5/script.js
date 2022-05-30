/*⋕js.Pm.Md.MSI.5*/

let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
		'data34',
		'data35',
	],
	4: [
		'data41',
		'data42',
	],
};

//С помощью вложенных циклов выведите на экран все строки с данными.
for (let dat in data){
    for ( let str of data[dat]){
        console.log(str);
    }
}