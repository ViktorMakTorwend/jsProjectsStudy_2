/*⋕js.Pm.Md.MSI.4*/

let employees = [
	{
		name: 'name1',
		salary: 300,
		dismissed: false,
	},
	{
		name: 'name2',
		salary: 400,
		dismissed: true,
	},
	{
		name: 'name3',
		salary: 500,
		dismissed: false,
	},
	{
		name: 'name4',
		salary: 600,
		dismissed: true,
	},
	{
		name: 'name5',
		salary: 700,
		dismissed: false,
	},
];

//Выведите на экран имена и зарплаты неуволенных работников.

for (let employee of employees){
    if (employee['dismissed'] == false){
        console.log(employee['name'] + '-' + employee['salary']);
    }
}