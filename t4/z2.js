const num = prompt('Введіть число.')

if( num > 0 && num % 2 > 0 ){
	alert('Введене число є додатнім і непарним.')
	
} else if( num > 0 && num % 2 == 0){
	alert('Введене число є додатнім і парним.')
	
} else if( num < 0 && num % 2 < 0 ){
	alert("Введене число є від'ємним і непарним.")
	
} else if( num < 0 && num % 2 == 0 ){
	alert("Введене число є від'ємним і парним.")
	
} else if( num == 0 ){
	alert("Введене число не є ні додатнім ні від'ємни і парни.")
	
} else {
	alert("Невірно введено число.")
	
}

