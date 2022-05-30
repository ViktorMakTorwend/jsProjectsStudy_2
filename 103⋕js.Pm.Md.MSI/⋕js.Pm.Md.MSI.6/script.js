/*⋕js.Pm.Md.MSI.6*/

let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];

for (let i = 0; i < data.length; i++){
    let subObj = data[i];
    for (let dat in subObj){
        console.log(subObj[dat]);
    }
}