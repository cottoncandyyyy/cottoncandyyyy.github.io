const arr = [ 6, 2, 1 ];

const arr_2 = arr.slice();

const nums = [];

for( i = 0; i < 5; i++ ){
	
	const num = prompt('Введіть число');
	
	const num_2 = Number(num);
	
	const index = arr_2.indexOf(num_2);
	
	if( index == -1 ){
		arr_2.push(num_2);
	} else {
		nums.push(num_2);
		arr_2[index] = '*';
	}
}

if( arr_2.length <= 5 ){
	console.log(`Премога. Вгадано числа - ${nums}`)
} else{
	console.log(`Нажаль ви програли.`)
}

console.log(arr, arr_2);